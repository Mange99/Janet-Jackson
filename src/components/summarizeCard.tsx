import { Box, Heading, Image, Text } from "@chakra-ui/react";

interface SummarizeCardProps {
  image: string;
  title: string;
  description: string;
}

const summarizeCard = ({ image, title, description }: SummarizeCardProps) => {
  return (
    <Box textAlign="center" boxShadow="md" borderRadius={8} p={2} minH="100%">
      <Image src={image} w="full" h="300px" alt="excercise" />
      <Heading mt={8} size="lg">
        {title}
      </Heading>
      <Text mt={4}>{description}</Text>
    </Box>
  );
};

export default summarizeCard;
