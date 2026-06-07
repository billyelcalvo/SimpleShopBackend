import {UserSchema} from '../../domain/schemas/user.schema'

export class userAssembler{
    static rawToInterface({name, password, email, id} : {name : string, password : string, email? : string, id? : string}){
        const result = UserSchema.safeParse({ name, password, email, id}); 

        if(!result.success){
            throw new Error(result.error.message)
        }
        return result.data;
    }
}