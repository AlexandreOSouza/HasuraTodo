import { useUser } from "@auth0/nextjs-auth0";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react"
import axios from "axios";
import { KeyboardEvent } from "react";
import { BiCircle } from 'react-icons/bi';

const TodoSearchBox = (props: any) => {

    const handleKeydown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            const todoValue = e.currentTarget.value
            props.save(todoValue)
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
