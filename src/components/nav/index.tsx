import { useUser } from "@auth0/nextjs-auth0";
import NextLink from 'next/link'

import {
    Box,
    Flex,
    Text,
    Button,
    Stack,
    useColorModeValue,
    useBreakpointValue,
  } from '@chakra-ui/react';

import { useMemo } from "react";


const Nav = () => {
    const { user } = useUser();

    const RenderLink = (path: string, displayName: string) => {
        return (
            <NextLink href={path} passHref>
                <Button
                    display={{ base: 'none', md: 'inline-flex' }}
                    fontSize={'sm'}
                    fontWeight={600}
                    color={'white'}
                    bg={'pink.400'}
                    _hover={{
                    bg: 'pink.300',
                    }}>
                    {displayName}
                </Button>
            </NextLink>
        )
    }

    const RenderButton = useMemo(() => {
        if (!user) {
            return RenderLink('/api/auth/login', 'Login')    
        }
        return RenderLink('/api/auth/logout', 'Logout')    
    }, [user])

    return (
        <Box>
      <Flex
        color={useColorModeValue('gray.100', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        align={'center'}>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Text
            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
            fontFamily={'heading'}
            fontWeight={'bold'}
            color={useColorModeValue('gray.100', 'white')}>
            TODO - APP
          </Text>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}>
          {RenderButton}
        </Stack>
      </Flex>
    </Box>
    )
}

export default Nav;

