import { UserRepository } from "../repository/userRepository";


export class UserService {

    private userRepository: UserRepository;

    constructor() {
        this.userRepository = new UserRepository();
    }

    async getUsers() {
        return await this.userRepository.getUsers();
    }

    async createUser(user) {
        console.log(user);
        return await this.userRepository.createUser(user);
    }

    /*
    async updateTask(task) {
        return await this.taskRepository.updateTask(task);
    }

    async deleteTask(taskId) {
        return await this.taskRepository.deleteTask(taskId);
    }
    */
}