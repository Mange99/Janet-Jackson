import jwt from "jsonwebtoken"
import { Request, Response } from "express"
import { APILogger } from "../logger/api.logger"

const JWT_KEY = process.env.JWT_SECRET || "123456";

class JWT {

    private logger: APILogger;

    constructor() {
        this.logger = new APILogger();
    }

    authenticateJWT(req: Request, res: Response) {
        const authHeader = req.headers.authorization
        if (authHeader && authHeader !== "null") {
        // const token = authHeader.split(" ")[1];
        this.logger.info("auth Header" + JWT_KEY, "")

        jwt.verify(authHeader, JWT_KEY, (err: any, user: any) => {
            if (err) {
            this.logger.error("Error:: " + err)
            return res
                .status(403)
                .send({ success: false, message: "Token Expired" })
            }
            req.user = user
            
        })
        } else {
        res.status(403).json({ success: false, message: "Unauthorized" })
        }
    }
}
export default new JWT()