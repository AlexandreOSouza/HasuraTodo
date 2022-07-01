import ApolloClient from 'apollo-boost'
import type { NextPage } from 'next'
import Nav from '../src/components/nav'
import { GET_INCOMPLETE_TODOS } from '../store/server/queries'
import styles from '../styles/Home.module.css'
import { gqlClient } from '../utils/ApolloClient'

const GET_URL = '/api/getTodos'

const Home: NextPage = (props) => {


  return (
    <>
      <Nav />
    </>
  )
}

export async function getServerSideProps() {
  console.log('server side')

  const data = await gqlClient.request(GET_INCOMPLETE_TODOS)
  console.log(data)
  return { 
      props: {
        name: 'alexandre'
      }
  }
}

export default Home
