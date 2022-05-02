import express, { Request, Response } from "express";
import { ObjectId } from "mongodb";
import {collections} from "../../services/database.service"
import { exercise } from "../models/exercise";


export const exerciseRouter = express.Router();

exerciseRouter.use(express.json());

exerciseRouter.get("/", async (_req: Request, res: Response) => {
    try {
       const games = (await collections.favoriteExercises?.find({}).toArray()) as unknown as exercise[];

        res.status(200).send(games);
    } catch (error) {
        res.status(500).send(error);
    }
});

exerciseRouter.post("/",async (req: Request, res: Response) => {
   try {

        const newFavoriteExercise = req.body as exercise;
        const result = await collections.favoriteExercises?.insertOne(newFavoriteExercise);
        result
            ? res.status(201).send(`Successfully created a new favoriteExercise with id ${result.insertedId}`)
            : res.status(500).send("Failed to create a new favoriteExercise.");
   }  catch (error) {
       console.error(error);
       res.status(400).send(error);
   }
});