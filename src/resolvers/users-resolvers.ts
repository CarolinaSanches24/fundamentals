import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { User } from "../dtos/models/users.model";
import { UserInput } from "../dtos/inputs/userInput";
import { db } from "../infra/dataBase/mysql/db";
import { schemaUser } from "../infra/dataBase/schemas/userSchema";

@Resolver(() => User)
export class UsersResolver {
  @Query(() => [User])
  @Mutation(() => User)
  async createUser(@Arg("data") data: UserInput) {
    const user = await db.insert(schemaUser).values(data);
    return user;
  }
}
