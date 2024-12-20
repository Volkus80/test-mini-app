import { HStack, IconButton } from "@chakra-ui/react"
import { ColorModeButton } from "../color-mode"
import { LuMenu } from 'react-icons/lu'

const Header = () => {
    return (
        <HStack justifyContent="space-between" w="100%">
            <IconButton>
                <LuMenu color="green" />
            </IconButton>
            <ColorModeButton />
        </HStack>
    )
}

export { Header }