import {UserInterface} from '../../../../domain/schemas/user.schema'
import {User} from '../../../../domain/entities/user'
import {hashService} from '../../bcrypt/service/hashService'

export  async function createUser(user : UserInterface){
    const password = await hashService.hash(user.password);
    return new User(user.name, password, user.email);
}
export function updateUser(user : UserInterface){

}
export function getById(id : string){

}
export function getByEmail(email : string){

}