export class User{

    constructor(private name : string, 
        private password : string,
        private email? : string){}

    getName() { return this.name }
    getPassword() { return this.password }
    getEmail() { return this.email }
}