import { Box } from "@chakra-ui/react"
import { Key } from "react";
import TodoItem from "../atoms/TodoItem"
import TodoSearchBox from "../atoms/TodoSearchBox"

interface TodoItemProps {
    todo_id: number;
    todo_text: string;
    todo_mark: boolean;
    todo_user: string;
}

const TodoList = (props: any) => {
    return (
        <Box 
            width={{ sm: '40%'}} 
            height={'70vh'} 
        >
            <TodoSearchBox />

            <Box background={'white'} borderRadius={5} mt={8} pb={8} boxShadow={'0px 0px 14px 0px rgba(0,0,0,0.2)'}>
                {props.todos.map((item: TodoItemProps, index: Key | null | undefined) => (
                    <TodoItem item={item} key={index} />
                ))}
            </Box>
        </Box>
    )
}

export default TodoList
