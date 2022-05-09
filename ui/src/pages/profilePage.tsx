import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import { SessionProps } from "../components/types";
import { SessionService } from "../services/sessionService";
import { Box, Flex, Heading } from "@chakra-ui/react";

async function getSession(token: string) {
  const sessionService = new SessionService();
  return await sessionService.getSaved(token);
}

export const ProfilePage = () => {
  const [session, setSession] = useState<SessionProps[]>([]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token != null) {
      getSession(token)
        .then((response) => setSession(response))
        .catch((err) => console.error(err));
    }
  }, []);

  return (
    <>
      <Row>
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
          <Form.Label className="mt-3"> Exercises session </Form.Label>
        </Col>
      </Row>
      <Box>
        {/* session != [] &&
          session.map((e) => {
            return (
              <Box>
                <Heading>{e.sessionTitle}</Heading>
                <Flex>
                  {e.exersiceProps.map((e) => {
                    e.name;
                  })}
                </Flex>
              </Box>
            );
          }) */}
      </Box>
    </>
  );
};
