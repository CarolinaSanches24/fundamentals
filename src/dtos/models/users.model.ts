import { ObjectType, Field } from "type-graphql";

enum roles{
  admin,
  client,
  employee
}

@ObjectType()
export class User {
  @Field()
  name: string;
  @Field()
  email: string;
  @Field()
  password: string;
  @Field()
  role:roles;
}
@ObjectType()
export class UserResponseDTO {
  @Field()
  name: string;
  @Field()
  email: string;
}