import { ApolloClient, InMemoryCache } from "@apollo/client";
import { GraphQLClient } from 'graphql-request';


const Client = new ApolloClient({
    uri: "https://giving-crappie-45.hasura.app/v1/graphql",
    headers: {
        'x-hasura-admin-secret': process.env.API_SECRET
    },
    cache: new InMemoryCache(),
});

export const gqlClient = new GraphQLClient(process.env.API_URL);

if (process.env.API_SECRET) {
    gqlClient.setHeader('x-hasura-admin-secret', process.env.API_SECRET);
  }

export default Client;