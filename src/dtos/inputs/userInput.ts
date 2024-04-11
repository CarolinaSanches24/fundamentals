import { Field, InputType } from "type-graphql";
import { GraphQLScalarType ,Kind} from "graphql";
import { IsString } from "class-validator";
@InputType()
export class UserInput {
  @Field(() => ID)
  @IsString()
  id: string;

  @Field()
  name: string;
}

//Custom type primitive 

const ID = new GraphQLScalarType({
    name: "ID",
    description: "The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache.",
    parseValue(value: any) {
      return value; // value from the client
    },
    serialize(value: any) {
      return value.toString(); // value sent to the client
    },
    parseLiteral(ast) {
      if (ast.kind === Kind.INT) {
        return parseInt(ast.value, 10); // ast value is always in string format
      }
      return null;
    },
  });