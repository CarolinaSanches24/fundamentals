import { GraphQLScalarType, Kind } from "graphql";

const ID = new GraphQLScalarType({
  name: "ID",
  description:
    "The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache.",
  parseValue(value: any) {
    return value;
  },
  serialize(value: any) {
    return value.toString();
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.INT) {
      return parseInt(ast.value, 10);
    }
    return null;
  },
});

const Date: any = new GraphQLScalarType({
  name: "Date",
  description: "The `Date` scalar type represents a date value.",
  parseValue(value: any) {
    return new Date(value);
  },
  serialize(value: any) {
    return value.getTime();
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.STRING) {
      return new Date(ast.value);
    }
    return null;
  },
});

export { ID, Date };
