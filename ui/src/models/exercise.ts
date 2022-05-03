import { ObjectId } from "mongodb";

export interface exercise {
    objectId?: ObjectId,
    name: string;
    bodyPart: string;
    equipment: string;
    gifUrl: string;
    id: string;
    target: string;
    bodyPartImg: string;
}