import { useUser } from "@auth0/nextjs-auth0"
import { Box, Container, Text } from "@chakra-ui/react"
import axios from "axios"
import { useMemo, useState } from "react"
import TodoList from "../TodoList"

const GET_TODOS = '/api/getTodos'

interface TodoItemProps {
    todo_id: number;
    todo_text: string;
    todo_mark: boolean;
    todo_user: string;
}

const Content = () => {

    const { user } = useUser()
    const [todos, setTodos] = useState<TodoItemProps[]>([])

    useMemo(() => {
        const getTodos = async () => {
            const { data }  = await axios.post(GET_TODOS, {
                user: user?.email
            })
            if (data.todos) {
                setTodos(data.todos)
            }
        }
        
        if (user?.email) {
            getTodos()
        }
    }, [user?.email])

    return (
        <Container maxW={'100%'} minHeight={'300px'} centerContent>
            <Box padding='4' maxW='md'>
                <Text fontWeight={'bold'} color={'gray.100'} fontSize={28}>
                    { user ? `Hey ${user?.name}` : 'You must to be logged in' }
                </Text>
            </Box>
            {user && <TodoList todos={todos} />}
        </Container>
    )
}

export default Content
