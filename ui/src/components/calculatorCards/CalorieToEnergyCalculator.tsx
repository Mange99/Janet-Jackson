import { useState } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";
import { Button } from "../button";
let calorie: number = 0;

function calorieToEnergyCalculate() {
  return calorie * 4.2;
  //https://www.betterhealth.vic.gov.au/health/healthyliving/kilojoules-and-calories source for math conversion of calories and kJ
}

export function CalorieToEnergyCalculator() {
  const [energy, setEnergy] = useState(0);

  return (
    <>
      <Card style={{ width: "18rem", height: "15rem", marginBottom: "2rem" }}>
        <Card.Body>
          <Card.Title>Calorie to energy Calculator</Card.Title>

          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form>
                <Row>
                  <Col>
                    <Form.Group controlId="calories">
                      <Form.Control
                        onChange={(e) => (calorie = Number(e.target.value))}
                        min="0"
                        max="220"
                        type="number"
                        placeholder="Calories"
                      />
                    </Form.Group>
                  </Col>
                  <Col></Col>
                </Row>
              </Form>
            </Form.Group>
          </Form>

          <Button mb={3} onClick={() => setEnergy(calorieToEnergyCalculate)}>
            Calculate
          </Button>
          <Form.Control type="text" placeholder={energy + " kJ"} readOnly />
        </Card.Body>
      </Card>
    </>
  );
}
