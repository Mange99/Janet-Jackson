
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import {exerciseRouter} from "../src/routes/favoriteExercises.router"
import { connectToDatabase } from "./database.service";

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(exerciseRouter);

app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// simple route

connectToDatabase()
  .then(() => {
    app.use("exercises", exerciseRouter);

    app.listen(8080, () => {
      console.log(`Server started at http://localhost:8080`)
    })
    
  });

