import React, { useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import "./calculatorStyles.css"

let age: number = 0;
let height: number = 0;
let weight: number = 0;

 // BMR (kcal / day) = 10 * weight (kg) + 6.25 * height (cm) – 5 * age (y) + s (kcal / day)
 //where s is +5 for males and -161 for female

function bmrCalculate(gender: boolean) {
  let s: number = 0;
  if(gender) {
      s = 5;
  } else {
      s = -161
  }
  return 10 * weight + 6.25 * height - 5 * age + s;
}

export function BmrCalculator() {

  const [gender, setGender] = useState(true);  
  const [bmr, setBmr] = useState(0);

  return (
    <>
      <Card style={{ width: "25rem" }}>
        <Card.Body>
          <Card.Title>BMR Calculator</Card.Title>

          <Form>
            <Form.Group className="mb-3">
              <Form>
                <Row>
                <Col>
                    <Form.Group controlId="age" className="mb-3">
                      <Form.Control
                        onChange={(e) => (age = Number(e.target.value))}
                        min="0"
                        max="100"
                        type="number"
                        placeholder="Age"
                      />
                    </Form.Group>
                  </Col>
                  <Form.Group className="mb-3">
                    <Form.Check
                            inline
                            label="Man"
                            name="group1"
                            type={"radio"}
                            id={`inline-radio-1`}
                            onChange={(e) => (setGender(true))}
                            />
                        <Form.Check
                            inline
                            label="Woman"
                            name="group1"
                            type={"radio"}
                            id={`inline-radio-2`}
                            onChange={(e) => (setGender(false))}
                            />
                    </Form.Group>
                  <Col>
                    <Form.Group controlId="height" className="mb-3">
                      <Form.Control
                        onChange={(e) => (height = Number(e.target.value))}
                        min="0"
                        max="100"
                        type="number"
                        placeholder="Height"
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="weight" className="mb-3">
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

          <Button onClick={() => setBmr(bmrCalculate(gender))} variant="primary">
            Calculate
          </Button>
        </Card.Body>
        <Card.Body className="mb-3">
             <div className="bmr-container">
                {bmr > 100 && <h4>You need {bmr} calories a day</h4>}
            </div>
        </Card.Body>
      </Card>
    </>
  );
}