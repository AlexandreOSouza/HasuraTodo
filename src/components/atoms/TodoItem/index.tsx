import { CloseIcon } from "@chakra-ui/icons";
import { Box, Checkbox, Text, Flex } from "@chakra-ui/react"
import { useState } from "react";

interface TodoItemProps {
    item: {
        id: number;
        text: string;
        checked: boolean;
    }
}

const TodoItem = ({item} : TodoItemProps) => {

    const [isChecked, setIsChecked] = useState(item.checked)
    const [showDelete, setShowDelete] = useState(false)

    const handleChecked = () => {
        setIsChecked(prev => !prev)
    }

    const handleMouseEnter = () => {
        setShowDelete(true)
    }

    const handleMouseLeave = () => {
        setShowDelete(false)
    }

    return (
        <Flex 
            display={'flex'} 
            justifyContent={'space-between'} 
            padding={'20px'} 
            width={'100%'} 
            borderBottom={'1px'} 
            borderBottomColor={'#e4e5f1'}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            cursor={'pointer'}
        >
            <Flex >
                <Checkbox 
                    colorScheme={'pink'} 
                    isChecked={isChecked} 
                    onChange={handleChecked} 
                />
                <Text ml={5} color={'gray.500'}>{item.text}</Text>
            </Flex>
            {showDelete && <CloseIcon color={'gray.400'} />}
            
        </Flex>
    )
}

export default TodoItem
