import { MailtrapClient } from "mailtrap";
import { ENV_VARS } from "../config/ENV_VARS.js";

export const sendEmail = async (req, res) => {
    const { email, name, message } = req.body
    
    if (!email || !name || !message) {
        return res.status(400).json({success: false, msg: "All fields are required"})
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(email)) {
        return res
            .status(400)
            .json({ success: false, msg: "Invalid email" });
    }

    const TOKEN = ENV_VARS.MAIL_TRAP_TOKEN;

    const client = new MailtrapClient({
        token: TOKEN,
    });

    const sender = {
        email: "mailtrap@demomailtrap.com", 
        name: name,
    };
    const recipients = [
        {
            email: "54johnmbugua@gmail.com",
        },
    ];

    await client
        .send({
            from: sender,
            to: recipients,
            subject: "Work with Johnny Dev",
            text: message,
            category: "Services",
        })
        .then(console.log, console.error);
    
    res.status(200).json({success: true, msg: "Email sent succesfully"})
};
