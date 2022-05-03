import { UserService } from "../service/userService";
import { APILogger } from '../logger/api.logger';

export class UserController {


    private userService: UserService;
    private logger: APILogger;

    constructor() {
        this.userService = new UserService();
        this.logger = new APILogger()
    }

    async getUsers() {
        this.logger.info('Controller: getUsers', null)
        return await this.userService.getUsers();
    }

    async createUser(user) {
        this.logger.info('Controller: createUser', user);
        return await this.userService.createUser(user);
    }

    /*
    async updateTask(task) {
        return await this.taskService.updateTask(task);
    }

    async deleteTask(taskId) {
        return await this.taskService.deleteTask(taskId);
    }
    */
}