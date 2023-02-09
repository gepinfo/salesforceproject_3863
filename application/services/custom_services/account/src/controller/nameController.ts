import { Request, Response } from 'express';
import { nameService } from '../service/nameService';
import { CustomLogger } from '../config/Logger'
let name = new nameService();

export class nameController {
    
    constructor() { }
    
    public GpDelete(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    name.GpDelete(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into nameController.ts: GpDelete');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from nameController.ts: GpDelete');
    })}
public GpSearch(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    name.GpSearch(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into nameController.ts: GpSearch');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from nameController.ts: GpSearch');
    })}
public GpSearchForUpdate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    name.GpSearchForUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into nameController.ts: GpSearchForUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from nameController.ts: GpSearchForUpdate');
    })}
public GpUpdate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    name.GpUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into nameController.ts: GpUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from nameController.ts: GpUpdate');
    })}
public GpGetNounById(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    name.GpGetNounById(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into nameController.ts: GpGetNounById');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from nameController.ts: GpGetNounById');
    })}
public GpGetAllValues(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    name.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into nameController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from nameController.ts: GpGetAllValues');
    })}
public GpCreate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    name.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into nameController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from nameController.ts: GpCreate');
    })}
public GpGetNounCreatedBy(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    name.GpGetNounCreatedBy(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into nameController.ts: GpGetNounCreatedBy');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from nameController.ts: GpGetNounCreatedBy');
    })}


}