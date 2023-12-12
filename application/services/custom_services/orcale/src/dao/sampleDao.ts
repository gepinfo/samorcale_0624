import * as mongoose from 'mongoose';
import sampleModel from '../models/daomodels/sample';
import * as generate from 'nanoid/generate';
import * as dictionary from 'nanoid-dictionary';
import { CustomLogger } from '../config/Logger'


export class sampleDao {
    private sample = sampleModel;
    constructor() { }
    
    public async GpCreate(sampleData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into sampleDao.ts: GpCreate');

    let temp = new sampleModel(sampleData);

    
    
    
    temp.save().then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from sampleDao.ts: GpCreate');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetNounCreatedBy(sampleData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into sampleDao.ts: GpGetNounCreatedBy');

    

    
    
    
    this.sample.aggregate(([
                        { $match: { $and: [{ created_by: sampleData.created_by }] } }
                    ])).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from sampleDao.ts: GpGetNounCreatedBy');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}


}