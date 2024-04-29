import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { User } from "../dtos/models/users.model";
import { UserInput } from "../dtos/inputs/userInput";
import { db } from "../infra/dataBase";
import { schemaUser } from "../infra/dataBase/schemas/userSchema";


@Resolver(() => User)
export class UsersResolver {
  @Query(() => [User])
  async getUsers(): Promise<User[]> {
    const results = await db.select().from(schemaUser);
    const users: User[] = results.map(result=>({
      id:String(result.id),
      name:result.name,
    }));
    return users;
  }

  
  // @Mutation(() => User)
  // async createUser(@Arg("data") data: UserInput) {
    
    
  // }
}
