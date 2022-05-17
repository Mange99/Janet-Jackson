import {verify} from "jsonwebtoken"
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
        //magic numbers to get rid of line endings in token, eg \""
    

        try {
            if (authHeader && authHeader !== "null") {
            this.logger.info("authHeader::" , authHeader);
            verify(authHeader, JWT_KEY, (err: any, user: any) => {
                if (err) {
                this.logger.error("Error:: " + err)
                //403 is status: forbidden
                return res
                    .status(403)
                    .send({ success: false, message: "Token Expired" })
                }
                return res.status(200).json({
                    success: true,
                    message: "Authorized",
                })
            })
            } else {
                res.status(403).json({ success: false, message: "Unauthorized" });
            }
        } catch(e) {
            this.logger.error("Error with authentication::" + e);
            throw new Error(e);
            }
        
    }
}
export default new JWT()