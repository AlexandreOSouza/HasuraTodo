import { Box } from "@chakra-ui/react"
import axios from "axios";
import { Key, useState } from "react";
import { TodoItemProps } from "../../../utils/interfaces";
import TodoItem from "../atoms/TodoItem"
import TodoSearchBox from "../atoms/TodoSearchBox"

const DELETE_TODO = '/api/deleteTodo';


const TodoList = (props: any) => {

    const [ todos, setTodos ] = useState(props.todos)

    const handleDelete = (todo_id: number) => {
        axios.post(DELETE_TODO, {
            todo_id: todo_id
        }).then(() => {
            setTodos(todos.filter((item: TodoItemProps) => {
                return item.todo_id !== todo_id
            }))
        })
    }

    return (
        <Box 
            width={{ sm: '40%'}} 
            height={'70vh'} 
        >
            <TodoSearchBox save={props.save} />

            <Box background={'white'} borderRadius={5} mt={8} pb={8} boxShadow={'0px 0px 14px 0px rgba(0,0,0,0.2)'}>
                {todos.map((item: TodoItemProps, index: Key | null | undefined) => (
                    <TodoItem item={item} key={index} handleDelete={handleDelete} />
                ))}
            </Box>
        </Box>
    )
}

export default TodoList
