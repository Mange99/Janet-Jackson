import { ExerciseProps, SessionProps } from "../components/types";

export class SessionService {
  public async getAllSessions(): Promise<any> {
    const response = await fetch("http://localhost:3080/api/sessions");
    return await response.json();
  }

  public async createSession(data: SessionProps): Promise<any> {
    console.log(JSON.stringify(data));

    const response = await fetch(`http://localhost:3080/api/session/create`, {
      mode: "no-cors",
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return await response.json();
  }
}
