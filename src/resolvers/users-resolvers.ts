import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { User } from "../dtos/models/users.model";
import { UserInput } from "../dtos/inputs/userInput";
import { db } from "../infra/dataBase/connect";
import { schemaUser } from "../infra/dataBase/schemas/userSchema";


@Resolver(() => User)
export class UsersResolver {
  @Query(() => [User])
  async getUsers(): Promise<any> {
    const result = await db.select().from(schemaUser);
  }

  @Mutation(() => User)
  async createUser(@Arg("data") data: UserInput) {
    
  }
}
