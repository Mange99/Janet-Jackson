import { Box, Heading } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box
      w="full"
      h="80"
      pt="16"
      mt="16"
      backgroundColor={"black"}
      textAlign="center"
    >
      <Box w="full" h="3px" backgroundColor="white"></Box>
      <Heading textColor={"white"} pt="4">
        inspirational quote
      </Heading>
    </Box>
  );
};

export default Footer;
