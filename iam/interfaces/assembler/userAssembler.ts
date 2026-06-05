import {UserSchema} from '../../domain/schemas/user.schema'

export class userAssembler{
    static rawToInterface({name, password, email} : {name : string, password : string, email? : string}){
        const result = UserSchema.safeParse({ name, password, email}); 

        if(!result.success){
            throw new Error(result.error.message)
        }
        return result.data;
    }
}