import { Router, Request, Response } from "express";
import { registerSchema } from "../validation/authValidations.js";
import { ZodError } from "zod";
import { formateError } from "../helper.js";

const router = Router();

// * Register route
router.post("/register", async (req: Request, res: Response) => {
    try {
        const body = req.body;
        const payload = registerSchema.parse(body);
        res.json(payload); 
    } catch (error) {
        if (error instanceof ZodError) {
            const errors = formateError(error);
            res.status(422).json({message: "Invalid data", errors}); 
        }
        res.status(500).json({message: "Something went wrong!. Please try again."});
    }
});



export default router;