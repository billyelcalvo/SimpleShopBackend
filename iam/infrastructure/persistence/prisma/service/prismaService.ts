import { PrismaClient } from '../../../../../generated/prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'

export class prismaService{
    private static globalForPrisma = globalThis as unknown as { prisma: PrismaClient };
    private static instance : PrismaClient
    
    static getClient(){
        if(!this.instance){
            this.instance = this.globalForPrisma.prisma?? new PrismaClient(
            {adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })}
            );
             this.globalForPrisma.prisma = this.instance;
        }

        return this.instance;
    }
    
}




