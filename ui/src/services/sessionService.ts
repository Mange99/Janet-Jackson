import axios from "axios";
import { ExerciseProps, SessionProps } from "../components/types";

export class SessionService {
  public async getAllSessions(): Promise<any> {
    const response = await fetch("http://localhost:3080/api/sessions");
    return await response.json();
  }

  public async createSession(session: SessionProps): Promise<any> {
    try {
      const data = JSON.stringify({
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
