import User, { IUser } from "../model/user.model";
import {APILogger} from "../logger/api.logger";

class AuthService {

    private logger: APILogger;

    constructor() {
        this.logger = new APILogger();
    }

    async createUser(data: IUser) {
        try {
            const user = await User.create(data);
            await user.save();
        } catch(e) {
            this.logger.error("Failed to create user due to:: " + e);
            throw new Error(e);
        }
    }

    async findUserByName(username: string) {
        return User.findOne({
            username: username,
        }).exec();
    }
}

export default new AuthService();