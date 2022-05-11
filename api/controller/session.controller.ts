import { Request, Response } from "express";
import SessionService from "../service/session.service";
import { APILogger } from "../logger/api.logger";
import { SessionDocument } from "../model/session.model";

export class SessionController {
  private logger: APILogger;

  constructor() {
    this.logger = new APILogger();
  }

  async getSessions(req: Request, res: Response) {
    try {
      const token = req.body.token;
      const session = await SessionService.findAllSessions(token);
      const temp = token.slice(1, -1);
      let returnArr = [];

      session.map((session) => {
        if (temp == session.token) {
          returnArr.push({
            sessionTitle: session.sessionTitle,
            exersiceProps: session.exersiceProps,
          });
        }
      });

      if (returnArr) {
        const ret = {
          success: true,
          data: returnArr,
        };
        return ret;
      } else {
        this.logger.error("Session not found");
        const ret = {
          success: false,
          data: null,
          status: "Session not created",
        };
        return ret;
      }
    } catch (e) {
      this.logger.error("Error in session Controller " + e);
      throw new Error(e);
    }
  }

  async createSession(req: Request, res: Response) {
    try {
      const token = req.body.token;
      const sessionTitle = req.body.sessionTitle;
      const exersiceProps = req.body.exersiceProps;

      const session = await SessionService.findSessionById(sessionTitle);
      if (session) {
        //return a 202 if user already exist, with status
        const ret = {
          success: false,
          status: "Session already exists",
        };
        return ret;
      } else {
        try {
          await SessionService.createSession({
            token,
            sessionTitle,
            exersiceProps,
          });
          const ret = {
            success: true,
            data: {
              token: token,
              sessionTitle: sessionTitle,
              exersiceProps: exersiceProps,
            },
            status: "Session created",
          };
          this.logger.info("Session created succesfully: ", sessionTitle);
          return ret;
        } catch (e) {
          this.logger.error("Controller capturing error: " + e);
          throw new Error("Error while creating session");
        }
      }
    } catch (e) {
      throw new Error(e);
    }
  }
}
