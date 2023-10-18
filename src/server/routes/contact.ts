import * as express from 'express';
import Mailgun from 'mailgun.js';
import * as FormData from 'form-data';
import config from '../config';

if (!config.mg.key) throw new Error("Missing Mailgun key.")

const client = new Mailgun(FormData).client({
    key: config.mg.key,
    username: "api",
});

const router = express.Router();

router.post("/", async (req, res, next) => {
    const { email, subject, message } = req.body;
    try {
    if (!config.mg.domain) throw new Error("Missing Mailgun domain.")

        await client.messages.create(config.mg.domain, {to: "jakobwilsonn@gmail.com", subject, html: message, from: email})
        res.status(200).json({message:"Email sent."})
    } catch(error) {
        console.log(error)
        res.status(500).json({message: "Unable to send email, try contact request later."})
    }
})

export default router;