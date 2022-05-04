import { NextFunction, Request, Response } from "express"
import AuthService from "../service/auth.service";
import {sign} from "jsonwebtoken";
import  bcrypt from "bcryptjs";
import { APILogger } from "../logger/api.logger";
import { UserDocument } from "../model/user.model";

const jwtSecret: string = process.env.JWT_SECRET || "123456";
const tokenExpirationInSeconds = 36000;

export class AuthController {

    private logger: APILogger;

    constructor() {
        this.logger = new APILogger();
    }

    async login(req: Request, res: Response) {
        
        try {

            const username = req.body.user.username;
            const passwordHash = req.body.user.password;

            const user = await AuthService.findUserByName(username);

            if(user) {
                this.logger.info("Comparing passwords:: " + user.password + " " + passwordHash, " end");
                const isPasswordCorrect = (user.password === passwordHash);

                if(!isPasswordCorrect) {
                    this.logger.error("Invalid password");
                    throw new Error("Invalid password")
                }   else {
                    const token = sign(req.body, jwtSecret, {
                        expiresIn: tokenExpirationInSeconds,
                    });
                    return res.status(200).json({
                        success: true,
                        data: user,
                        token,
                    })
                }
            } else {
                this.logger.error("User not found");
                throw new Error("User not found");
            }
        } catch(e) {
            this.logger.error("Error in auth controller:: " + e);
            throw new Error(e);
        }
    }

    async createUser(req: Request, res: Response) {
        try {
          const username = req.body.user.username;
          const password = req.body.user.password;
          const user = await AuthService.findUserByName(username);
          this.logger.info("user:: ", user)
          if (user) {

            //return a 202 if user already exist, with status
              return res.status(202).json({
                  success: false,
                  status: "User already exists",
              })
          } else {
            try {
              await AuthService.createUser({
                username,
                password,
              })
              this.logger.info("User created", "");
              const token = sign({ username, password }, jwtSecret, {
                expiresIn: tokenExpirationInSeconds,
              })
              this.logger.info(JSON.stringify({
                success: true,
                data: {username: username, password: password},
                token: token,
              }), "");
              return res.status(200).json({
                success: true,
                data: {username, password},
                token,
              })
            } catch (e) {
              this.logger.error("Controller capturing error:: " + e)
              throw new Error("Error while register")
            }
          }
        } catch (e) {
            throw new Error(e);
        }
      }

}