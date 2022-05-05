import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Heading,
    Input,
    InputGroup,
    InputRightElement,
    Text,
  } from "@chakra-ui/react";
  import { useState } from "react";
  import { Link } from "react-router-dom";
  import { Token } from "../components/useToken";
  import { UserService} from "../services/userService";
  import bcrypt from "bcryptjs";
  
  interface login {
    username: string;
    password: string;
  }

  type props = {
    setToken: (userToken: Token) => void;
  };
  
  async function loginUser(credentials: login) {
    const userService = new UserService();
    const hash = await bcrypt.hash(credentials.password, "$2a$10$xxAWZFt0iyqvNR6KEpeILO");
    credentials.password = hash;
    return userService.signIn(credentials);
  }
  
  const LoginPage = ({ setToken }: props) => {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
  
    const [show, setShow] = useState(false);
  
    const handleSubmit = (event: React.FormEvent) => {
      event.preventDefault();
      
      loginUser({
        username,
        password,
      }).then((token) => {
        if(token != null) {
        setToken(token);
        } else {
          //login failed do something, maybe show some error msg
        }
      });
    };
  
    return (
      <Box w="25%" p={8} margin="auto" borderRadius="lg">
        <Heading>Login</Heading>
        <form onSubmit={handleSubmit}>
          <FormControl my={4} isRequired>
            <FormLabel htmlFor="username">Username</FormLabel>
            <Input
              id="username"
              type="username"
              placeholder="Username"
              onChange={(e) => setUserName(e.target.value)}
            />
            <FormLabel htmlFor="pwd">Password</FormLabel>
  
            <InputGroup size="md">
              <Input
                id="password"
                pr="4.5rem"
                type={show ? "text" : "password"}
                placeholder="Enter password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <InputRightElement width="4.5rem">
                <Button
                  h="1.75rem"
                  size="sm"
                  onClick={() => {
                    setShow(!show);
                  }}
                >
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
  
            <Button
              w="100%"
              colorScheme="teal"
              _focus={{ boxShadow: 0 }}
              mt={4}
              type="submit"
            >
              Login
            </Button>
            <Link to="/register">
              <Text my={4} align="center" textColor={"gray.500"}>
                Dont have an account?{" "}
              </Text>
            </Link>
          </FormControl>
        </form>
      </Box>
    );
  };
  
  export default LoginPage;