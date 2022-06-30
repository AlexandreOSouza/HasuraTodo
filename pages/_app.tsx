import type { AppProps } from 'next/app'
import { UserProvider } from '@auth0/nextjs-auth0';
import { ApolloProvider } from '@apollo/client';
import Client from '../utils/ApolloClient';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <ApolloProvider client={Client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </UserProvider>
  )
}

export default MyApp
