import { useUser } from "@auth0/nextjs-auth0"
import { Box, Container, Flex, Text } from "@chakra-ui/react"

const Content = () => {

    const { user } = useUser()

    return (
        <Container maxW={'100%'} centerContent>
            <Box padding='4' maxW='md'>
                <Text fontWeight={'bold'} fontSize={28}>
                    { user ? `Hey ${user?.name}` : 'You must to be logged in' }
                </Text>
            </Box>
        </Container>
    )
}

export default Content
