import { useUser } from "@auth0/nextjs-auth0";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react"
import axios from "axios";
import { KeyboardEvent } from "react";
import { BiCircle } from 'react-icons/bi';

const INSERT_TODO = '/api/addTodo';

const TodoSearchBox = () => {

    const { user } = useUser()

    const saveTodo = (todoValue: string) => {
        axios.post(INSERT_TODO, {
            todo_text: todoValue,
            todo_mark: Boolean(false),
            todo_user: user?.email
        }).then(data => {
            console.log(data)
        })
    }

    const handleKeydown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            const todoValue = e.currentTarget.value
            saveTodo(todoValue)
            console.log('add to static list')
        }
    }
    
    return (
        <InputGroup>
            <InputLeftElement
                pointerEvents='none'
                // eslint-disable-next-line react/no-children-prop
                children={<BiCircle color='white' />}
            />
            <Input 
                type='text' 
                placeholder='Create a new todo...' 
                color={'gray.100'} 
                _placeholder={{ color: 'inherit' }}
                variant='flushed'
                onKeyDown={e => handleKeydown(e)}
            />
        </InputGroup>
    )
}

export default TodoSearchBox
