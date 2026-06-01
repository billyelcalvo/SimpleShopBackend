import { UserInterface } from "../../../../domain/schemas/user.schema";
import { User } from "../../../../domain/entities/user";
import { hashService } from "../../bcrypt/service/hashService";
import { prismaService } from "../../prisma/service/prismaService";

export class userRepository {

  private static client = prismaService.getClient();

  static async createUser(user: UserInterface) {
    const password = await hashService.hash(user.password);

    await this.client.user.create({
      data: {
        name : user.name,
        ...(user.email && {email : user.email}),
        password : password
      }

    });
    return new User(user.name, password, user.email);
  }
  static async updateUser(user: UserInterface) {
    return await this.client.user.update({ where : {id : user.id}, data : {
      name : user.name,
      ...( user.email && {email : user.email})
    } });
  }
  static async getById(id: string) {
    return await this.client.user.findUnique({where : { id : id} } );
  }
  static async getByEmail(email: string) {
    return await this.client.user.findUnique({where : {email : email}});
  }
}
