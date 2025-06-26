import { Button, HStack } from "@chakra-ui/react"

interface Login {
    loginComponent: () => {} | void
}

export const LoginComponent = ({ loginComponent }: Login) => {
    return (
        <HStack>

            <Button onClick={loginComponent}
                colorPalette="teal"
                size='lg'
                width='100%'
                marginTop='5px'>
                Acessar
            </Button>

        </HStack>

    )
}