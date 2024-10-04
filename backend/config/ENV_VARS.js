import dotenv from "dotenv"
dotenv.config()

export const ENV_VARS = {
    PORT: process.env.PORT,
    GMAIL_USER: process.env.GMAIL_USER,
    MAIL_TRAP_TOKEN: process.env.MAIL_TRAP_TOKEN,
};