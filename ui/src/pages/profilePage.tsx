import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import { SessionProps } from "../components/types";
import { SessionService } from "../services/sessionService";
import { Box, Flex, Grid, Heading, Text, VStack } from "@chakra-ui/react";
import { ExerciseCard } from "../components/exerciseCard/exerciseCard";
import { useStateContext } from "../contexts/tokenContext";

async function getSession(token: string) {
  const sessionService = new SessionService();
  return await sessionService.getSavedSessions(token);
}

export const ProfilePage = () => {
  const [session, setSession] = useState<SessionProps[]>([]);
  const { state, dispatch } = useStateContext();

  useEffect(() => {
    const token = state.token;

    if (token != null) {
      getSession(token)
        .then((response) => setSession(response.data))
        .catch((err) => console.error(err));
    }
  }, []);

  return (
    <Flex direction={{ base: "column", md: "row" }}>
      <Col className="m-3">
        <Form>
          <Form.Group className="mb-3" controlId="ProfileUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="" disabled />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="ProfileEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="profilePassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button>Save changes</Button>
        </Form>
      </Col>

      <Col>
        <Heading mt={5} ml={5} size="lg">
          Saved Sessions
        </Heading>

        <Grid
          mt={4}
          templateColumns={{ md: "repeat(1, 1fr)", lg: "repeat(2, 1fr)" }}
          rowGap={8}
          mb={8}
        >
          {session != [] &&
            session.map((session) => {
              return (
                <Box
                  margin="auto"
                  w="80%"
                  p={4}
                  borderRadius="2xl"
                  boxShadow={"base"}
                >
                  <Heading size="md" fontWeight={"medium"}>
                    {session.sessionTitle}
                  </Heading>
                  {session.exersiceProps.map((e) => {
                    return (
                      <Box my={2}>
                        <ExerciseCard
                          exercise={{
                            name: e.name,
                            bodyPart: e.bodyPart,
                            equipment: e.equipment,
                            gifUrl: e.gifUrl,
                            target: e.target,
                            bodyPartImg: e.bodyPartImg,
                            id: e.id,
                          }}
                        />
                        <Text>
                          Sets: {e.sets} Reps: {e.reps}
                        </Text>
                      </Box>
                    );
                  })}
                </Box>
              );
            })}
        </Grid>
      </Col>
    </Flex>
  );
};
