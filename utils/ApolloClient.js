import { ApolloClient, InMemoryCache, useApolloClient } from "@apollo/client";
import { GraphQLClient } from 'graphql-request';

const Client = new ApolloClient({
    uri: process.env.API_URL,
    options: {
      reconnect: true,
      lazy: true,
      connectionParams: {
        headers: {
          'x-hasura-admin-secret': process.env.API_SECRET
        }
      }
    },
    cache: new InMemoryCache(),
});

export const gqlClient = new GraphQLClient(process.env.API_URL);

if (process.env.API_SECRET) {
    gqlClient.setHeader('x-hasura-admin-secret', process.env.API_SECRET);
}

export default Client;


