import { model, Schema, Model, Document } from 'mongoose';
import {connect, disconnect} from "../config/db.config";
import MongooseService from '../service/MongooseService';

export interface UserDocument extends Document {
    username: string
    password: string
}
export interface IUser {
    username: string,
    password: string
}

interface UserModel extends Model<UserModel> {
    build(attrs: IUser): UserDocument;
}

const UserSchema: Schema = new Schema({
    
    name: { type: String, required: true},
    password: { type: String, required: true}
}, 
{
    toObject: {
        transform:  function(doc, ret) {},
    },
    toJSON: {
        transform: function(doc, ret) {
            delete ret.password;
        },
    },
}
);

UserSchema.statics.build = (attrs: IUser) => {
    return new User(attrs);
}

const User = MongooseService.getInstance().model<UserDocument>(
    "User",
    UserSchema
)

export default User;