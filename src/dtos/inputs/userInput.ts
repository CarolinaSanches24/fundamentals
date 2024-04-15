import { Field, InputType } from "type-graphql";

import { IsString } from "class-validator";
@InputType()
export class UserInput {
  @Field()
  @IsString()
  name: string;
  @Field()
  @IsString()
  email: string;
  @Field()
  @IsString()
  password: string;
}