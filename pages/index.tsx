import type { NextPage } from 'next'
import Nav from '../src/components/nav'
import Content from '../src/components/Content'
import { GET_INCOMPLETE_TODOS } from '../store/server/queries'
import { gqlClient } from '../utils/ApolloClient'
import { Box } from '@chakra-ui/react'
import { INSERT_TODO } from '../store/server/mutations'

const GET_URL = '/api/getTodos'

const Home: NextPage = (props) => {
  return (
      <Box backgroundImage={'/img/bg-1.jpg'} backgroundSize={'100% auto'} backgroundRepeat={'no-repeat'} width={'100%'} >
        <Box width={'100%'} height={'100%'}>
          <Nav />
          <Content />
        </Box>
      </Box>
  )
}

export async function getServerSideProps() {

  const data = await gqlClient.request(GET_INCOMPLETE_TODOS)
  console.log(data)
  return { 
      props: {
        name: 'alexandre'
      }
  }
}

export default Home
