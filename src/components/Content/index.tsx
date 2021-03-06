import { useUser } from "@auth0/nextjs-auth0"
import { Box, Container, Text } from "@chakra-ui/react"
import axios from "axios"
import { useMemo, useState } from "react"
import { ThreeDots } from "react-loader-spinner"
import TodoList from "../TodoList"
import { TodoItemProps } from "../../../utils/interfaces"

const GET_TODOS = '/api/getTodos'
const INSERT_TODO = '/api/addTodo';

const Content = () => {

    const { user } = useUser()
    const [todos, setTodos] = useState<TodoItemProps[]>()

    const [isLoading, setIsLoading] = useState(false)

    const getTodos = async () => {
        setIsLoading(true)
        const { data }  = await axios.post(GET_TODOS, {
            user: user?.email
        })
        if (data.todos) {
            setTodos(data.todos)
        }
        setIsLoading(false)
    }

    const saveTodo = (todoValue: string) => {
        axios.post(INSERT_TODO, {
            todo_text: todoValue,
            todo_mark: Boolean(false),
            todo_user: user?.email
        }).then(data => {
            getTodos()
        })
    }

    useMemo(() => {
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

            {isLoading && (
                <ThreeDots color="pink" height={80} width={80} />
            )}
            {(user && !isLoading) && <TodoList todos={todos} save={saveTodo}/>}
        </Container>
    )
}

export default Content
