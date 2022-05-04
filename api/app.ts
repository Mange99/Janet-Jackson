import * as bodyParser from "body-parser";
import * as express from "express";
import { AuthController } from "./controller/auth.controller";
import { APILogger } from "./logger/api.logger";
import authJwt from "./middlewares/authJwt";

const path = require('path');

class App {

    public express: express.Application;
    public authController: AuthController;
    public logger: APILogger;

    constructor() {
        this.express = express();
        this.authController = new AuthController();
        this.logger = new APILogger();
        this.middleware();
        this.routes();
    }

    private middleware() {
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: true }));
        this.express.use(express.static(path.join(__dirname, '../ui/build')));
    }

    private routes(): void {
        this.express.get('/api/register/create-user', (req, res) => {
           // this.authController.getUsers().then(data => res.json(data));
        });

        this.express.get('/api/user', (req, res) => {
            authJwt.authenticateJWT(req, res);
         });
        
        this.express.post('/api/register/create-user', (req, res) => {
            console.log(req.body.user);
            console.log("aklsjdkalsjdklasjd")
            if(req.body.user == undefined) {
                res.send("error");
            }
            this.authController.createUser(req, res).then(data => {
                this.logger.info("Data created and returned::", data);
                res.json(data);
            }).catch((error) => {
                this.logger.error("Error::" + error);
            });
            //.then(data => res.json(data));
        });

        this.express.post('/api/login/signin', (req, res) => {
            console.log(req.body.user);
            if(req.body.user == undefined) {
                res.send("error");
            }
            this.authController.login(req, res).then(data => res.json(data));
        });
        
        /*
        this.express.put('/api/task', (req, res) => {
            this.taskController.updateTask(req.body.task).then(data => res.json(data));
        });
        
        this.express.delete('/api/task/:id', (req, res) => {
            this.taskController.deleteTask(req.params.id).then(data => res.json(data));
        });
        */

        this.express.get("/", (req, res, next) => {
            res.send("Typescript App works!!");
        });

        // handle undefined routes
        this.express.use("*", (req, res, next) => {
            res.send("Make sure url is correct!!!");
        });
    }
}

export default new App().express;