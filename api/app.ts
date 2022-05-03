import * as bodyParser from "body-parser";
import * as express from "express";
import { UserController } from "./controller/userController";
import { APILogger } from "./logger/api.logger";

const path = require('path');

class App {

    public express: express.Application;
    public userController: UserController;
    public logger: APILogger;

    constructor() {
        this.express = express();
        this.userController = new UserController();
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
        this.express.get('/api/users', (req, res) => {
            this.userController.getUsers().then(data => res.json(data));
        });
        
        this.express.post('/api/user', (req, res) => {
            console.log(req.body.user);
            if(req.body.user == undefined) {
                res.send("error");
            }
            this.userController.createUser(req.body.user).then(data => res.json(data));
            //.then(data => res.json(data));
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