import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form, Row, Col } from "react-bootstrap";

export const ProfilePage = () => {
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
   <Button>
     Save changes
   </Button>
           
          </Form>
        </Col>


        <Col>
        <Form.Label className="mt-3"> Exercises session  </Form.Label>
       
        
        </Col>
      </Row>
    </>
  );
};
