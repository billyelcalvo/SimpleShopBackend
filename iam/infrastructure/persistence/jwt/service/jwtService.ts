import jwt from 'jsonwebtoken';

const secret = process.env.JWT_SECRET!;

export class jwtService{

    static sign(id : string, role : string ){
        if(!secret) throw new Error("Secret key was not imported")
        return jwt.sign({
            id : id,
            role : role
        },secret,{ expiresIn : '1h'});
    }
    static verify(payload : string){
        if(!secret) throw new Error("Secret key was not imported")
        return jwt.verify(payload, secret);
        
    }
}