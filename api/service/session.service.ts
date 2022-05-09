import Session, { ISession } from "../model/session.model";
import { APILogger } from "../logger/api.logger";

class SessionService {
  private logger: APILogger;

  constructor() {
    this.logger = new APILogger();
  }

  async createSession(data: ISession) {
    try {
      const session = await Session.create(data);

      await session.save();
      return session;
    } catch (e) {
      this.logger.error("Failed to create session due to: " + e);
      throw new Error(e);
    }
  }

  async findSessionById(sessionTitle: string) {
    return Session.findOne({
      sessionTitle: sessionTitle,
    }).exec();
  }
}

export default new SessionService();
