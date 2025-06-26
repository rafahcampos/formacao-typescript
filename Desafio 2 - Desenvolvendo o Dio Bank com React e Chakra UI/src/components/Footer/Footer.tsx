import { Flex, Box, Center, Heading, Stack } from "@chakra-ui/react"

export const Footer = () => {
    return (
             <Flex 
              background='#FFE8CD' 
              padding='8' 
              color='black' w='100%' 
              justify='space-between' 
              align='center'
              fontFamily='sans-serif'
              position='fixed'
              bottom='0'
              left='0'
              borderTop='#FFE8CD'
              borderStyle='ridge'
              
             
              >
      
                  <Box w='1/3'/>
      
                  <Center>
                      <Heading textAlign='center'>  DIO </Heading>
                  </Center>
      
                  <Flex 
                  gap='4'
                  direction='row'
                  w='1/3'
                  
                  >
             
                  </Flex>
      
      
              </Flex>
    )
}