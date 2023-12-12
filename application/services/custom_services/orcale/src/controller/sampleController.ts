import { Request, Response } from 'express';
import { sampleService } from '../service/sampleService';
import { CustomLogger } from '../config/Logger'
let sample = new sampleService();

export class sampleController {
    
    constructor() { }
    
    public GpCreate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    sample.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into sampleController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from sampleController.ts: GpCreate');
    })}
public GpGetNounCreatedBy(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    sample.GpGetNounCreatedBy(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into sampleController.ts: GpGetNounCreatedBy');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from sampleController.ts: GpGetNounCreatedBy');
    })}


}