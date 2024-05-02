import { eq } from "drizzle-orm";
import { db } from "../dataBase/connect";
import { schemaUser } from "../dataBase/schemas/userSchema";
import { UsersResolver } from "../../resolvers/users-resolvers";

const app = require("express")();
const expressGraphql = require("express-graphql");

app.use(
    "/graphql",
    expressGraphql({
        schemaUser,
      rootValue: UsersResolver,
      graphiql: true
    })
  );
  
  app.listen(3000);

export async function GET() {
    const result = await db.select().from(schemaUser).where(eq(schemaUser.id,1));
    return new Response(JSON.stringify(result))
    
}