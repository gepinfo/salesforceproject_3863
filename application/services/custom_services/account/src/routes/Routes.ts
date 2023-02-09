import { Request, Response, NextFunction } from "express";
import { nameController } from '../controller/nameController';


export class Routes {
    private name: nameController = new nameController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/name/:id').delete(this.name.GpDelete);
app.route('/name/get/search').get(this.name.GpSearch);
app.route('/name/get/update').put(this.name.GpSearchForUpdate);
app.route('/name').put(this.name.GpUpdate);
app.route('/name/:id').get(this.name.GpGetNounById);
app.route('/name').get(this.name.GpGetAllValues);
app.route('/name').post(this.name.GpCreate);
app.route('/name/userid/created_by').get(this.name.GpGetNounCreatedBy);
     }

}