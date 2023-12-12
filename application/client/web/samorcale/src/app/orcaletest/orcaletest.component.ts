import { Component, OnInit, ViewChild } from '@angular/core';
import { OrcaletestService } from './orcaletest.service';





@Component({
  selector: 'app-orcaletest',
  templateUrl: './orcaletest.component.html',
  styleUrls: ['./orcaletest.component.scss'],
})

export class OrcaletestComponent implements OnInit {
    public sample:any = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        name: '',
        email: '',
    }




    constructor (
        private orcaletestService: OrcaletestService,
    ) { }

    ngOnInit() {
        this.sample.created_by = sessionStorage.getItem('email') || ''; 
        


    
    }


}