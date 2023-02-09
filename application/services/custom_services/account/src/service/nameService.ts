import { Request, Response } from 'express';
import {nameDao} from '../dao/nameDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';
let name = new nameDao();

export class nameService {
    
    constructor() { }
    
    public  GpDelete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into nameService.ts: GpDelete')
     let  nameId = req.params.id;
     name.GpDelete(nameId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from nameService.ts: GpDelete')
         callback(response);
         });
    }
    
public  GpSearch(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into nameService.ts: GpSearch')
     let  nameData = req.query;
     name.GpSearch(nameData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from nameService.ts: GpSearch')
         callback(response);
         });
    }
    
public  GpSearchForUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into nameService.ts: GpSearchForUpdate')
     let  nameData = req.body;
     name.GpSearchForUpdate(nameData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from nameService.ts: GpSearchForUpdate')
         callback(response);
         });
    }
    
public  GpUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into nameService.ts: GpUpdate')
     let  nameData = req.body;
     name.GpUpdate(nameData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from nameService.ts: GpUpdate')
         callback(response);
         });
    }
    
public  GpGetNounById(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into nameService.ts: GpGetNounById')
     let  nameId = req.params.id;
     name.GpGetNounById(nameId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from nameService.ts: GpGetNounById')
         callback(response);
         });
    }
    
public  GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into nameService.ts: GpGetAllValues')
     
     name.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from nameService.ts: GpGetAllValues')
         callback(response);
         });
    }
    
public  GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into nameService.ts: GpCreate')
     let  nameData = req.body;
     name.GpCreate(nameData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from nameService.ts: GpCreate')
         callback(response);
         });
    }
    
public  GpGetNounCreatedBy(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into nameService.ts: GpGetNounCreatedBy')
     let  nameData = { created_by: req.query.createdby };
     name.GpGetNounCreatedBy(nameData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from nameService.ts: GpGetNounCreatedBy')
         callback(response);
         });
    }
    
    
    
    
}