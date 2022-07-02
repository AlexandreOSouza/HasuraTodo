import { PhoneIcon, SearchIcon } from "@chakra-ui/icons"
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react"
import { BiCircle } from 'react-icons/bi';


const TodoSearchBox = () => {
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
            />
        </InputGroup>
    )
}

export default TodoSearchBox
