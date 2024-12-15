import express, { Application, Request, Response } from "express";
import "dotenv/config";
import path from "path";
import { fileURLToPath } from "url";
import ejs from "ejs";
import { sendEmail } from "./confiig/mail.js";

const app: Application = express();
const PORT = process.env.PORT || 7000;
const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.use(express.json());
app.use(express.urlencoded({extended: false}));

// * Set View engine
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "./views"));

app.get("/", async(req: Request, res: Response) => {
    const html = await ejs.renderFile(__dirname + `/views/emails/welcome.ejs`, {name: "shubham verma"});
    await sendEmail("vagaya1617@rustetic.com", "Testing SMTP", html)
    res.json({msg: "Email sent successfully!"});
});

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
