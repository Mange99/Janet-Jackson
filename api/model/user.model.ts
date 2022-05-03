import { model, Schema, Model, Document } from 'mongoose';

export interface IUser extends Document {
    name: string,
    password: string
}

const UserSchema: Schema = new Schema({
    
    name: { type: String, required: true},
    password: { type: String, required: true}
}
);

export const UserModel: Model<IUser> = model<IUser>('users', UserSchema);