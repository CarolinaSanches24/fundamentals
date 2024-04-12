import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { User } from "../dtos/models/users.model";
import { UserInput } from "../dtos/inputs/userInput";
import db from "../infra/drizzle";
import { schemaUser } from "../infra/dataBase/schemaUser";


@Resolver(() => User)
export class UsersResolver {
  @Query(() => [User])
  async users() {
    return db.select().from(schemaUser);
  }

  @Mutation(() => User)
  async createUser(@Arg("data") data: UserInput) {
    const user = await db.insert(schemaUser).values({name:data.name}).returning();
    return user;
  }
}
