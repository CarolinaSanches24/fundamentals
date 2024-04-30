import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { User, UserResponseDTO } from "../dtos/models/users.model";
import { db } from "../infra/dataBase/connect";
import { schemaUser } from "../infra/dataBase/schemas/userSchema";
import { UserInput } from "../dtos/inputs/userInput";
import { eq } from "drizzle-orm";

@Resolver(() => User)
export class UsersResolver {
  @Query(() => [User])
  async getUsers(): Promise<UserResponseDTO[] | []> {
    const result = await db.select().from(schemaUser);
    if(result.length==0)return [];
    return result;
  }

  @Mutation(() => User, { nullable: true })
  async createUser(@Arg("data") data: UserInput): Promise<void> {
    const { name, email, password} = data;
      const existingUser = await db.select().from(schemaUser).where(eq(schemaUser.email,email));

      if (existingUser && existingUser.length > 0) {
        throw new Error("Email já cadastrado. Por favor, escolha outro email.");
      }
      await db.insert(schemaUser)
      .values({ name, email, password });
  }
  @Mutation (()=>User, { nullable: true })
  async updatedUser(@Arg("data") data:UserInput, @Arg("userId") userId:number):Promise<void>{
    const {name, email, password} = data;
    await db.update(schemaUser)
    .set({ name, email, password })
    .where(eq(schemaUser.id, userId));
  }

  @Mutation(()=>User, {nullable:true})
  async deletedUser(@Arg("userId") userId:number):Promise<void>{
    await db.delete(schemaUser).where(eq(schemaUser.id, userId));
  }

}
