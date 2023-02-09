import * as mongoose from 'mongoose';
import nameModel from '../models/daomodels/name';
import { CustomLogger } from '../config/Logger'


export class nameDao {
    private name = nameModel;
    constructor() { }
    
    public async GpDelete(nameId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into nameDao.ts: GpDelete');

    

    
    
    
    this.name.findByIdAndRemove(nameId).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from nameDao.ts: GpDelete');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpSearch(nameData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into nameDao.ts: GpSearch');

    let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;

    
    
    Object.entries(nameData).forEach(
                            ([key,value]) => {
                                if(value !== ''){
                                    andkey = key;
                                    and_obj[andkey] = value;
                                }
                                else{
                                    orkey = key;
                                    or_obj[orkey] = { $ne: '' }
                                }
                            }
                        );;
    this.name.find({$and: [
                            {
                                $or: [
                                   or_obj
                                ]
                            },
                            and_obj
                        ]}).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from nameDao.ts: GpSearch');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpSearchForUpdate(nameData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into nameDao.ts: GpSearchForUpdate');

    

    
    
    
    this.name.findOneAndUpdate({ _id: nameData._id }, nameData, { new: true }).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from nameDao.ts: GpSearchForUpdate');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpUpdate(nameData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into nameDao.ts: GpUpdate');

    

    
    
    
    this.name.findOneAndUpdate({ _id: nameData._id }, nameData, { new: true }).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from nameDao.ts: GpUpdate');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetNounById(nameId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into nameDao.ts: GpGetNounById');

    

    
    
    
    this.name.findById(nameId).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from nameDao.ts: GpGetNounById');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetAllValues(callback){
    
    new CustomLogger().showLogger('info', 'Enter into nameDao.ts: GpGetAllValues');

    

    
    
    
    this.name.find().then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from nameDao.ts: GpGetAllValues');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpCreate(nameData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into nameDao.ts: GpCreate');

    let temp = new nameModel(nameData);

    
    
    
    temp.save().then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from nameDao.ts: GpCreate');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetNounCreatedBy(nameData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into nameDao.ts: GpGetNounCreatedBy');

    

    
    
    
    this.name.aggregate(([
                        { $match: { $and: [{ created_by: nameData.created_by }] } }
                    ])).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from nameDao.ts: GpGetNounCreatedBy');

        callback(result);
}).catch((error)=>{
callback(error);
});}


}