import { Query, Resolver, Arg, Mutation } from "type-graphql";
import { User } from "../dtos/models/users.model";
import { UserInput } from "../dtos/inputs/userInput";

@Resolver(() => User)
export class UsersResolver {
  @Query(() => [User])
  async users() {
    return [
      {
        name: "Carolina sanches",
      },
    ];
  }

@Mutation(() => User)
  async createUser(@Arg("data") data: UserInput) {
    const user = {
        name:data.name,
        id:data.id
    }
    return user
  }
}
