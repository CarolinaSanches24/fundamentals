import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { User } from "../dtos/models/users.model";
import { UserInput } from "../dtos/inputs/userInput";


@Resolver(() => User)
export class UsersResolver {
  @Query(() => [User])
  async getUsers(): Promise<User[]> {
    
    return users;
  }

  
  @Mutation(() => User)
  async createUser(@Arg("data") data: UserInput) {
    
    
  }
}
