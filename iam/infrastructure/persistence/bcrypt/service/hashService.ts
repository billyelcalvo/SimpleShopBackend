import bcrypt from 'bcrypt'

export class hashService{
    static async hash(password : string){
        return await bcrypt.hash(password, 10);
    }
    static async verifyHash(hash : string ,password : string){
        return await bcrypt.compare(password, hash);
    }
}