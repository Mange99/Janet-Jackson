import { connect, disconnect } from "../config/db.config";
import { APILogger } from '../logger/api.logger';
import { UserModel } from "../model/user.model";

export class UserRepository {

    private logger: APILogger;

    constructor() {
        connect();
        this.logger = new APILogger()
    }

    async getUsers() {
        const users = await UserModel.find({});
        console.log('tasks:::', users);
        return users;
    }

    async createUser(user) {
        let data = {};
        try {
            data = await UserModel.create(user);
        } catch(err) {
            this.logger.error('Error::' + err);
        }
        return data;
    }
/*
    async updateTask(user) {
        let data = {};
        try {
            data = await TaskModel.updateOne(user);
        } catch(err) {
            this.logger.error('Error::' + err);
        }
        return data;
    }

    async deleteTask(taskId) {
        let data: any = {};
        try {
            data = await TaskModel.deleteOne({_id : taskId});
        } catch(err) {
            this.logger.error('Error::' + err);
        }
        return {status: `${data.deletedCount > 0 ? true : false}`};
    }
    */
}