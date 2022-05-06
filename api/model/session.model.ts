import { model, Schema, Model, Document } from "mongoose";
import MongooseService from "../service/MongooseService";

export type ExerciseProps = {
  name: string;
  bodyPart: string;
  equipment: string;
  gifUrl: string;
  id: string;
  target: string;
  bodyPartImg: string;
};

export interface SessionDocument extends Document {
  sessionTitle: string;
  exersiceProps: ExerciseProps[];
}
export interface ISession {
  sessionTitle: string;
  exersiceProps: ExerciseProps[];
}

export interface SessionModel extends Model<SessionModel> {
  build(attrs: ISession): SessionDocument;
}

const SessionSchema: Schema = new Schema(
  {
    sessionTitle: { type: String, required: true },
    exersiceProps: {
      type: [
        {
          bodyPart: { type: String, required: true },
          equipment: { type: String, required: true },
          gifUrl: { type: String, required: true },
          id: { type: String, required: true },
          name: { type: String, required: true },
          target: { type: String, required: true },
        },
      ],
      required: true,
    },
  },
  {
    toObject: {
      transform: function (doc, ret) {},
    },
    toJSON: {
      transform: function (doc, ret) {},
    },
  }
);

SessionSchema.statics.build = (attrs: ISession) => {
  return new Session(attrs);
};

const Session = MongooseService.getInstance().model<SessionDocument>(
  "session",
  SessionSchema
);

export default Session;
