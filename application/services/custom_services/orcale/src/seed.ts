import * as mongoose from 'mongoose';
import { sampleSchema } from './models/daomodels/sample';

const sampleModel = mongoose.model('sample', sampleSchema);

export class Seed {

    constructor() {

    }

    

}
