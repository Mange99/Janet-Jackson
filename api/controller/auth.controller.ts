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

            const username: string = req.body.user.username;
            const passwordHash: string = req.body.user.password;

            const user = await AuthService.findUserByName(username);

            if(user) {
                const isPasswordCorrect = (user.password == passwordHash);
          
                if(!isPasswordCorrect) {
                    const ret =  {
                      success: false,
                      data: null,
                      token: null,
                      status: "Invalid password",
                    }
                    this.logger.info("Error, wrong password: ", null);
                    return ret;
                }   else {
                    const token = sign(req.body, jwtSecret, {
                        expiresIn: tokenExpirationInSeconds,
                    });
                    const ret = {
                      success: true,
                      data: user,
                      token,
                    }
                    this.logger.info("Password accepted for user: ", user.username);
                    return ret;
                }
            } else {
                this.logger.error("User not found");
                const ret =  {
                  success: false,
                  data: null,
                  token: null,
                  status: "User not found",
                }
                return ret;
            }
        } catch(e) {
            this.logger.error("Error in auth controller:: " + e);
            throw new Error(e);
        }
    }

    async createUser(req: Request, res: Response) {
        try {
          const username: string = req.body.user.username;
          const password: string = req.body.user.password;
          const user = await AuthService.findUserByName(username);
          if (user) {
            //return a 202 if user already exist, with status
            const ret = {
              success: false,
              data: null,
              token: null,
              status: "User already exists",
            }
              return ret;
          } else {
            try {
              await AuthService.createUser({
                username,
                password,
              })
              const token = sign({ username, password }, jwtSecret, {
                expiresIn: tokenExpirationInSeconds,
              })
              const ret = {
                success: true,
                data: {username: username, password: password},
                token: token,
                status: "User created",
              };
              this.logger.info("User created successfully: ", username);
              return ret;
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