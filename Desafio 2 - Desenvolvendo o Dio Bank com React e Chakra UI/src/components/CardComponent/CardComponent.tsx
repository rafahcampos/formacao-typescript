import { AbsoluteCenter, Box, Button, Center, HStack, Input, Stack, VStack } from "@chakra-ui/react"
import { Header } from "../Header/Header"
import { LoginComponent } from "../Login/LoginComponent"
import { login } from "../services/login"
import { Footer } from "../Footer/Footer"


interface CardComponent {
    //id: number,
    //paragraph: string,
    //details: string,

}

export const CardComponent = ({ }: CardComponent) => {

    return (
        <Box minHeight='100vh' backgroundColor='#FFF2EB' >
            <Header />
            <VStack
                backgroundColor='white'
                borderRadius='25px'
                background='#FFF2EB'
                direction={{ base: 'column', md: 'row' }} gap='10'

            >
                <Stack w='50%' marginTop='10%'>
                    <Input placeholder="Enter your email"
                        background='white'
                    />
                    <Input placeholder="Password"
                        background='white'
                    />
                </Stack>
            </VStack>
            <HStack
                wrap='wrap'
                gap='6'
                justify='center'
                marginTop='2'
            >
                <LoginComponent loginComponent={() => login('Tamara')}></LoginComponent>
            </HStack>
            <Footer />
        </Box>
    )
}
