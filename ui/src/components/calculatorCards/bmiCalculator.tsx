import { useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";

let height: number = 0;
let weight: number = 0;

function bmiCalculate() {
  const heightMeter: number = height / 100;
  return weight / (heightMeter * heightMeter);
}

export function BmiCalculator() {
  const [bmi, setBmi] = useState(0);

  return (
    <>
      <Card style={{ width: "18rem", height: "15rem" }}>
        <Card.Body>
          <Card.Title>BMI Calculator</Card.Title>

          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form>
                <Row>
                  <Col>
                    <Form.Group controlId="height">
                      <Form.Control
                        onChange={(e) => (height = Number(e.target.value))}
                        min="0"
                        max="220"
                        type="number"
                        placeholder="Height"
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="weight">
                      <Form.Control
                        onChange={(e) => (weight = Number(e.target.value))}
                        min="0"
                        max="160"
                        type="number"
                        placeholder="Weight"
                      />
                    </Form.Group>
                  </Col>
                </Row>
              </Form>
            </Form.Group>
          </Form>

          <Button
            className="mb-3"
            onClick={() => setBmi(bmiCalculate)}
            variant="primary"
          >
            Calculate
          </Button>
          <Form.Control type="text" placeholder={bmi + ""} readOnly />
        </Card.Body>
      </Card>
    </>
  );
}
