import { Button as ChakraButton, ButtonProps } from "@chakra-ui/react";

interface Props extends ButtonProps {}

export const Button = ({ children, ...props }: Props) => {
  return (
    <ChakraButton
      color="white"
      _active={{ bgColor: "#4fe3c8" }}
      bgColor={"#198754"}
      _hover={{ bgColor: "#21D0B1" }}
      _focus={{
        boxShadow: 0,
      }}
      {...props}
    >
      {children}
    </ChakraButton>
  );
};
