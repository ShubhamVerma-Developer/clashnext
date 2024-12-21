import {z} from 'zod';

export const registerSchema = z.object({
    name: z.string({message:"Name is required"}).min(3, {message: "Name must be 3 charaters long."}),
    email: z.string({message:"Email is required"}).email({message: "Plase type correct email."}),
    password: z.string({message:"Password is required"}).min(6, {message: "Password must be 6 charaters long."}),
    confirm_password: z.string({message:"Confirm password is required"}).min(6, {message: "Confirm password must be 6 charaters long."}),
}).refine((data)=> data.password === data.confirm_password, {message: "Passwords do not match.", path: ["confirm_password"]});

