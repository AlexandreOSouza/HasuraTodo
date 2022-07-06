import { CloseIcon } from "@chakra-ui/icons";
import { Box, Checkbox, Text, Flex } from "@chakra-ui/react"
import axios from "axios";
import { useMemo, useState } from "react";

interface TodoItemProps {
    item: {
        todo_id: number;
        todo_text: string;
        todo_mark: boolean;
        todo_user: string;
    },
    handleDelete: (id: number) => void
}

const UPDATE_MARK = '/api/updateTodo';

const TodoItem = ({ item, handleDelete } : TodoItemProps) => {

    const [isChecked, setIsChecked] = useState(item.todo_mark)
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

    useMemo(() => {
        axios.post(UPDATE_MARK, {
            todo_id: item.todo_id,
            todo_mark: isChecked
        })
    }, [setIsChecked, isChecked])
    
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
                <Text ml={5} color={'gray.500'}>{item.todo_text}</Text>
            </Flex>
            {showDelete && <CloseIcon color={'gray.400'} onClick={() => {handleDelete(item.todo_id)}} />}
            
        </Flex>
    )
}

export default TodoItem
