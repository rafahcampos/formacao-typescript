import { Box, Center, Flex, Stack } from '@chakra-ui/react'
import { Heading, Text } from '@chakra-ui/react'

export const Header = () => {
    return (
        <Flex 
        background='#FFE8CD' 
        padding='8' 
        color='black' w='100%' 
        justify='space-between' 
        align='center'
        fontFamily='sans-serif'
        borderBottom='#FFE8CD'
        borderStyle='ridge'
        >

            <Box w='1/3'/>

            <Center>
                <Heading textAlign='center'>  Dio Bank </Heading>
            </Center>

            <Flex 
            gap='4'
            direction='row'
            w='1/3'
            
            >
            <Stack 
            textAlign='end' 
            direction='row'
          
            gap='4'
            w='1/3'
            >
                <Text>Home</Text>
                <Text>About</Text>
                <Text>Contact</Text>
                <Text>Documentation</Text>
            </Stack>
            </Flex>


        </Flex>
    )
}