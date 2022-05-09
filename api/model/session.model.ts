import { model, Schema, Model, Document } from "mongoose";
import MongooseService from "../service/MongooseService";

export interface ExerciseSession {
  name: string;
  bodyPart: string;
  equipment: string;
  gifUrl: string;
  id: string;
  target: string;
  bodyPartImg: string;
  sets: number;
  reps: number;
}

export interface SessionDocument extends Document {
  token: string;
  sessionTitle: string;
  exersiceProps: ExerciseSession[];
}
export interface ISession {
  token: string;
  sessionTitle: string;
  exersiceProps: ExerciseSession[];
}

export interface SessionModel extends Model<SessionModel> {
  build(attrs: ISession): SessionDocument;
}

const SessionSchema: Schema = new Schema(
  {
    token: { type: String, required: true },
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
          sets: { type: Number, required: true },
          reps: { type: Number, required: true },
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
