import { Box, Button } from "@chakra-ui/react";

const TbButton = () => {
    return (
        <Box>
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                <Button _focus={{ boxShadow: 0 }} colorScheme="cyan">Torbjörn</Button>
            </a>
        </Box>
    )
}

export default TbButton;
