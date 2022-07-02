import { PhoneIcon, SearchIcon } from "@chakra-ui/icons"
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react"
import { KeyboardEvent } from "react";
import { BiCircle } from 'react-icons/bi';

interface TodoSearchBoxProps {
    addNewItemfunction: () => void
}

const TodoSearchBox = (addNewItemfunction: TodoSearchBoxProps) => {
    
    const handleKeydown = (e: KeyboardEvent<HTMLInputElement>) => {
        console.log(e.key)
        if (e.key === 'Enter') {
            addNewItemfunction;
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
