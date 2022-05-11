import axios from "axios";
import { ExerciseProps, SessionProps } from "../components/types";

export class SessionService {
  public async getSavedSessions(token: string): Promise<any> {
    try {
      const data = JSON.stringify({
        token: token,
      });
      console.log(data);

      const config = {
        method: "post",
        url: "http://localhost:3080/api/session/saved",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      const ret = await axios(config);
      console.log(ret.data);
      return ret.data;
    } catch (error) {
      console.log("Error with login request: " + error);
    }
  }

  public async createSession(session: SessionProps): Promise<any> {
    try {
      const data = JSON.stringify({
        token: session.token,
        sessionTitle: session.sessionTitle,
        exersiceProps: session.exersiceProps,
      });

      console.log(data);

      const config = {
        method: "post",
        url: "http://localhost:3080/api/session/create",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      return await axios(config);
    } catch (error) {
      console.log("Error with create session: " + error);
    }
  }
}
