import mongoose from "mongoose"
import debug, { IDebugger } from "debug"
const log: IDebugger = debug("app:mongoose-service")
class MongooseService {

    private count = 0

    private mongooseOptions = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        serverSelectionTimeoutMS: 5000,
        useFindAndModify: false,
    }

    /*  useNewUrlParser: true,
        useUnifiedTopology: true, 
    */

    constructor() {
        this.connectWithRetry()
    }
    getInstance() {
        return mongoose
    }
    connectWithRetry() {
        log("process.env.MONGO_CONNECTION_STRING", process.env.MONGO_CONNECTION_STRING)
        const MONGO_CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING || ""
        log("Connecting to MongoDB(Retry when failed)")
        mongoose
        .connect(MONGO_CONNECTION_STRING, this.mongooseOptions)
        .then(() => {
            log("MongoDB is connected")
        })
        .catch(err => {
            const retrySeconds = 5
            log(
            `MongoDB connection unsuccessful (will retry #${++this
                .count} after ${retrySeconds} seconds):`,
            err
            )
            setTimeout(this.connectWithRetry, retrySeconds * 1000)
        })
    }
}
export default new MongooseService()