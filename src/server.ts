import "reflect-metadata";
import {ApolloServer} from 'apollo-server';
import { buildSchema } from "type-graphql";
import path from 'node:path';
import { UsersResolver } from "./resolvers/users-resolvers";


async function bootstrap(){
    const schema = await buildSchema({
        resolvers:[
            UsersResolver,
        ],
        
        emitSchemaFile:path.resolve(__dirname, 'schema.gql')
    });

    const server = new ApolloServer({
        schema,

    })
    const {url} = await server.listen();
    console.log(`🚀  Server ready at ${url}`)
}

bootstrap()


  