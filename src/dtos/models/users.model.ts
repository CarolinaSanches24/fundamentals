import { ObjectType, Field } from "type-graphql";

@ObjectType()
export class User {
  @Field()
  id: String;
  @Field()
  name: String;
  @Field()
  email: String;
  @Field()
  password: String;
  @Field()
  createdAt: Date;
  @Field()
  updatedAt: Date;
}
