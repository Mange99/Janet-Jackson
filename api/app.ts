import * as bodyParser from "body-parser";
import * as express from "express";
import * as cors from "cors";
import { AuthController } from "./controller/auth.controller";
import { APILogger } from "./logger/api.logger";
import authJwt from "./middlewares/authJwt";
import { SessionController } from "./controller/session.controller";
import { FavoriteController } from "./controller/favorite.controller";


const path = require("path");

class App {
  public express: express.Application;
  public authController: AuthController;
  public logger: APILogger;
  public sessionController: SessionController;
<<<<<<< Updated upstream

=======
  public favoriteController: FavoriteController;
>>>>>>> Stashed changes
  constructor() {
    this.express = express();
    this.authController = new AuthController();
    this.sessionController = new SessionController();
    this.favoriteController = new FavoriteController();
    this.logger = new APILogger();
    this.middleware();
    this.routes();
  }

  private middleware() {
    const allowedOrigins = ["http://localhost:3000"];
    const corsOptions: cors.CorsOptions = {
      origin: allowedOrigins,
    };
    this.express.use(cors(corsOptions));
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: true }));
    this.express.use(cors());
    this.express.use(express.static(path.join(__dirname, "../ui/build")));
  }

  private routes(): void {
    this.express.get("/api/register/create-user", (req, res) => {
      // this.authController.getUsers().then(data => res.json(data));
    });

    this.express.get("/api/user", (req, res) => {
      authJwt.authenticateJWT(req, res);
    });

    this.express.post("/api/register/create-user", (req, res) => {
      if (req.body.username == undefined) {
        res.send("Error, received an undefined object");
      }
      this.authController
        .createUser(req, res)
        .then((data) => {
          return res.status(200).json(data);
        })
        .catch((error) => {
          this.logger.error("Error:: " + error);
        });
    });

    this.express.post("/api/login/signin", (req, res) => {
      console.log(req.body.user);

      if (req.body.user == undefined) {
        res.send("error");
      }
      this.authController
        .login(req, res)
        .then((data) => {
          return res.status(200).json(data);
        })
        .catch((error) => {
          this.logger.error("Error:: " + error);
        });
    });

    this.express.post("/api/session/create", (req, res) => {
      this.logger.info("session", req.body);
      this.logger.info("session", req.body.sessionTitle);
      this.sessionController
        .createSession(req, res)
        .then((data) => {
          return res.status(200).json(data);
        })
        .catch((error) => {
          this.logger.error("Error:: " + error);
        });
    });

    this.express.post("/api/favorite/create", (req, res) => {
      this.logger.info("favorite", req.body);

      this.favoriteController
        .createFavorite(req, res)
        .then((data) => {
          return res.status(200).json(data);
        })
        .catch((error) => {
          this.logger.error("Error:: " + error);
        });
    });

    this.express.get("/", (req, res, next) => {
      res.send("Typescript App works!!");
    });

    // handle undefined routes
    this.express.use("*", (req, res, next) => {
      res.send("Make sure url is correct!!!");
    });
  }
}

export default new App().express;
