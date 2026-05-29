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
        password : password
      }

    });

    return new User(user.name, password, user.email);
  }
  static async updateUser(user: UserInterface) {
    
  }
  static async getById(id: string) {}
  static async getByEmail(email: string) {}
}
