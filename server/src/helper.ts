import path from "path";
import { fileURLToPath } from "url";
import { ZodError } from "zod";
import ejs from "ejs";

export const formateError = (error:ZodError): any => {
    let errors:any = {}
    error.errors?.map((issue)=>{
        errors[issue.path[0]] = issue.message
    })
    return errors;
}

export const renderEmailEjs = async (fileName:string, payload:any):Promise<string> => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const html:string = await ejs.renderFile(__dirname + `/views/emails/${fileName}.ejs`, payload);

    return html;
}