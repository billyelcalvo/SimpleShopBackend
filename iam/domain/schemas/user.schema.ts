import {z} from 'zod'
export const UserSchema = z.object(
    {
        name : z.string(),
        password: z.string()
            .min(8, "Password must be at least 8 characters")
            .max(72, "Password must not exceed 72 characters"),
        email : z.email().optional()
        
    });

export type UserInterface = z.infer<typeof UserSchema>;