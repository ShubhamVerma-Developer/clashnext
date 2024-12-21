import express, { Application, Request, Response } from "express";
import "dotenv/config";
import path from "path";
import { fileURLToPath } from "url";
import ejs from "ejs";
import Routes from "./routes/index.js";

const app: Application = express();
const PORT = process.env.PORT || 7000;
const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.use(express.json());
app.use(express.urlencoded({extended: false}));

// * Set View engine
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "./views"));

// * Routes
app.use(Routes);

app.get("/", async(req: Request, res: Response) => {
    const html = await ejs.renderFile(__dirname + `/views/emails/welcome.ejs`, {name: "shubham verma"});
    // await sendEmail("vagaya1617@rustetic.com", "Testing SMTP", html)

    await emailQueue.add(emailQueueName, {to: "falecaf950@mowline.com", subject: 
        "testing queue email", body : html
    });
    res.json({msg: "Email sent successfully!"});
});

// * Queues
import "./jobs/index.js"
import { emailQueue, emailQueueName } from "./jobs/EmailJob.js";

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
