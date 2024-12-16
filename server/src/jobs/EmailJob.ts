import {Queue, Worker} from "bullmq"
import { defaultQueueOptions, redisConnection } from "../confiig/queue.js";
import { sendEmail } from "../confiig/mail.js";

export const emailQueueName = "emailQueue";

interface EmailJobDataType {
    to: string;
    subject: string;
    body: string;
}

export const emailQueue = new Queue(emailQueueName, {connection: redisConnection, defaultJobOptions: defaultQueueOptions})


// * Worker
export const queueWorker = new Worker(emailQueueName, async (job) => {
    const data : EmailJobDataType = job.data;
    await sendEmail(data.to, data.subject, data.body);
    console.log("The queue data is ",data);
},
{
    connection: redisConnection,
}
)