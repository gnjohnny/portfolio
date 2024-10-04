import express from "express";
import bodyParser from "body-parser";
import cors from "cors"

import { ENV_VARS } from "./config/ENV_VARS.js";
import sendEmailRoute from "./routes/sendEmail.route.js"

const app = express();
const PORT = ENV_VARS.PORT

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

app.use("/api/send", sendEmailRoute)

app.listen(PORT, () => {
    console.log(`server running on port: ${PORT}`)
})