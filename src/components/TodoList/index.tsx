import { Box } from "@chakra-ui/react"
import TodoItem from "../atoms/TodoItem"
import TodoSearchBox from "../atoms/TodoSearchBox"

interface TodoItemProps {
    id: number;
    text: string;
    checked: boolean;
}

const TODOS: TodoItemProps[] = [
    {
        id: 1,
        text: 'aaaaa',
        checked: false
    },
    {
        id: 2,
        text: 'bbbb',
        checked: false
    },
    {
        id: 3,
        text: 'bbbb',
        checked: false
    }

]

const TodoList = () => {

    return (
        <Box 
            width={{ sm: '40%'}} 
            height={'70vh'} 
        >
            <TodoSearchBox />

            <Box background={'white'} borderRadius={5} mt={8} pb={8} boxShadow={'0px 0px 14px 0px rgba(0,0,0,0.2)'}>
                {TODOS.map((item, index) => (
                    <TodoItem item={item} key={index} />
                ))}
            </Box>
        </Box>
    )
}

export default TodoList
