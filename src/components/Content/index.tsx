import { useUser } from "@auth0/nextjs-auth0"
import { Box, Container, Text } from "@chakra-ui/react"
import TodoList from "../TodoList"

const Content = () => {

    const { user } = useUser()

    return (
        <Container maxW={'100%'} centerContent>
            <Box padding='4' maxW='md'>
                <Text fontWeight={'bold'} color={'gray.100'} fontSize={28}>
                    { user ? `Hey ${user?.name}` : 'You must to be logged in' }
                </Text>
            </Box>
            <TodoList />
        </Container>
    )
}

export default Content
