import { Box, Button, Heading, Icon, Image } from "@chakra-ui/react";
import bg from "../res/images/hero.jpg";
import { MdArrowDownward } from "react-icons/md";

interface HeroProps {
  scrollToNext: () => void;
}

const Hero = ({ scrollToNext }: HeroProps) => {
  return (
    <Box
      position="relative"
      backgroundImage={bg}
      w="full"
      h="100vh"
      backgroundPosition="center"
      backgroundSize="cover"
    >
      <Box
        w="full"
        textAlign="center"
        position="absolute"
        top="40%"
        left="50%"
        transform="translate(-50%, -50%)"
      >
        <Heading
          textColor="white"
          fontFamily="Anton, sans-serif"
          fontSize="7xl"
        >
          STOP WATCHING.
        </Heading>
        <Heading
          textColor="#21D0B1"
          fontFamily="Anton, sans-serif"
          fontSize="9xl"
          lineHeight={0.8}
        >
          START DOING.
        </Heading>
      </Box>
      <Button
        position="absolute"
        backgroundColor="transparent"
        border="2px"
        textColor="white"
        _focus={{ boxShadow: 0 }}
        _hover={{ bgColor: "#21D0B1" }}
        borderColor="#21D0B1"
        top="85%"
        right={0}
        mr={32}
        onClick={scrollToNext}
      >
        Show more
        <Icon as={MdArrowDownward} ml={2} boxSize={4} />
      </Button>
    </Box>
  );
};

export default Hero;
