import {
  Box,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  Button,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { Button as SpecialButton } from "../components/button";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserService } from "../services/userService";
import bcrypt from "bcryptjs";
import { useStateContext } from "../contexts/tokenContext";

const salt = process.env.REACT_APP_SALT || "$2a$10$xxAWZFt0iyqvNR6KEpeILO";
interface login {
  username: string;
  password: string;
}

async function loginUser(credentials: login) {
  const userService = new UserService();
  const hash = await bcrypt.hash(credentials.password, salt);
  credentials.password = hash;
  return await userService.signIn(credentials);
}

const LoginPage = () => {
  const { state, dispatch } = useStateContext();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [failedLogin, setFailedLogin] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    loginUser({
      username,
      password,
    }).then((token) => {
      if (token != null) {
        dispatch?.({
          type: "UPDATE_TOKEN",
          payload: token,
        });
        setFailedLogin(false);
        navigate("/");
      } else {
        dispatch?.({
          type: "DELETE_TOKEN",
        });
        setFailedLogin(true);
      }
    });
  };

  return (
    <Box w="25%" p={8} margin="auto" borderRadius="lg">
      <Heading>Login</Heading>

      {failedLogin && (
        <Text className="mt-3" textStyle="h3">
          Username or password wrong, try again
        </Text>
      )}

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

          <SpecialButton
            w="100%"
            _focus={{ boxShadow: 0 }}
            mt={4}
            type="submit"
          >
            Login
          </SpecialButton>
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
