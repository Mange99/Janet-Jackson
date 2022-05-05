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
  import { Link, Navigate, useNavigate } from "react-router-dom";
  import { Token } from "../components/useToken";
  import bcrypt from "bcryptjs";
import { UserService } from "../services/userService";
  
// TODO add email to model in api
  interface Register { 
    username: string;
    password: string;

  }
  
  type props = {
    setToken: (userToken: Token) => void;
  };
  
  const SALT_ROUNDS = 10;

  async function registerUser(credentials: Register) {
    const userService = new UserService();
    //Store salt in env or db and get salt for each user or switch it up for each user
    const hash = await bcrypt.hash(credentials.password, "$2a$10$xxAWZFt0iyqvNR6KEpeILO");
    credentials.password = hash;
    return await userService.createUser(credentials);
  }
  const RegisterPage = ({ setToken }: props) => {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [show, setShow] = useState(false);
    const [error, setError] = useState(false);
    const navigate = useNavigate();
  
    const handleSubmit = (event: React.FormEvent) => {
      event.preventDefault();
      registerUser({
            username,
            password,
      }).then((token) => {
        console.log(token);
        if(token != null) {
        setToken(token);
        setError(false);
        navigate("/");
        } else {
          setError(true);
          //creation failed do something, maybe show some error msg
        }
      });
    };
    return (
      <Box w="25%" p={8} margin="auto" borderRadius="lg">
        <Heading>Register your account</Heading>

        {error && <Text className="mt-3" textStyle='h3'>Username already taken, try again</Text> }

        <form onSubmit={handleSubmit}>
          <FormControl my={4} isRequired>
            <FormLabel htmlFor="username">Username</FormLabel>
            <Input
              id="username"
              type="username"
              placeholder="Username"
              onChange={(e) => setUserName(e.target.value)}
            />
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input
              id="email"
              type="email"
              placeholder="blah.blah@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
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
              colorScheme="blue"
              _focus={{ boxShadow: 0 }}
              mt={4}
              type="submit"
            >
              Register
            </Button>
            <Link to="/login">
              <Text my={4} align="center" textColor={"gray.500"}>
                Already have account?{" "}
              </Text>
            </Link>
          </FormControl>
        </form>
      </Box>
    );
  };
  export default RegisterPage;