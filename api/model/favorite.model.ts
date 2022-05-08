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

export interface FavoriteDocument extends Document {
  userId: string;
  exersiceId: string;
  exersiceProps: ExerciseProps;
}
export interface IFavorite {
  userId: string;
  exersiceId: string;
  exersiceProps: ExerciseProps;
}

export interface FavoriteModel extends Model<FavoriteModel> {
  build(attrs: IFavorite): FavoriteDocument;
}

const FavoriteSchema: Schema = new Schema(
  {
    userId: { type: String, required: true },
    exersiceId: { type: String, required: true },
    exersiceProps: {
      type: 
        {
          bodyPart: { type: String, required: true },
          equipment: { type: String, required: true },
          gifUrl: { type: String, required: true },
          id: { type: String, required: true },
          name: { type: String, required: true },
          target: { type: String, required: true },
        },
      
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

FavoriteSchema.statics.build = (attrs: IFavorite) => {
  return new Favorite(attrs);
};

const Favorite = MongooseService.getInstance().model<FavoriteDocument>(
  "favorites",
  FavoriteSchema
);

export default Favorite;
