import { useState } from "react";
import {
  Card,
  Col,
  Form,
  Row,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
import "./calculatorStyles.css";
import { Button } from "../button";
let age: number = 0;
let height: number = 0;
let weight: number = 0;

// BMR (kcal / day) = 10 * weight (kg) + 6.25 * height (cm) – 5 * age (y) + s (kcal / day)
// where s is +5 for males and -161 for female
// formula taken from https://www.omnicalculator.com/health/bmr#what-is-bmr-bmr-definition
// amr = active metabolic rate
// Sedentary (little or no exercise): AMR = BMR x 1.2
// Lightly active (exercise 1–3 days/week): AMR = BMR x 1.375
// Moderately active (exercise 3–5 days/week): AMR = BMR x 1.55
// Active (exercise 6–7 days/week): AMR = BMR x 1.725
// Very active (hard exercise 6–7 days/week): AMR = BMR x 1.9
// taken from https://www.verywellfit.com/how-many-calories-do-i-need-each-day-2506873

enum activityLevel {
  None = 1,
  Sedentary = 1.2,
  Lightly = 1.375,
  Moderately = 1.55,
  Active = 1.725,
  VeryActive = 1.9,
}

function bmrCalculate(gender: boolean, activity: activityLevel) {
  return gender
    ? Math.round((10 * weight + 6.25 * height - 5 * age + 5) * activity)
    : Math.round((10 * weight + 6.25 * height - 5 * age - 168) * activity);
}

export function BmrCalculator() {
  const [gender, setGender] = useState(true);
  const [bmr, setBmr] = useState(0);
  const [calorieIntakeCalc, setCalorieIntake] = useState(false);
  const [activity, setActivityLevel] = useState(activityLevel.None);
  const [activityTitle, setActivityTitle] = useState("Activity Level");

  const handleSelectActivity = (
    activityInput: activityLevel,
    title: String
  ) => {
    setActivityLevel(activityInput);
    setActivityTitle(String(title));
  };

  return (
    <>
      <Card style={{ width: "25rem" }}>
        <Card.Body>
          <Card.Title>BMR/AMR Calculator</Card.Title>

          <Form>
            <Form.Group>
              <Form.Check
                inline
                label="BMR"
                name="group1"
                type={"radio"}
                id={`inline-radio-3`}
                onChange={() => setCalorieIntake(false)}
              />
              <Form.Check
                inline
                label="Calorie Intake, AMR"
                name="group1"
                type={"radio"}
                id={`inline-radio-4`}
                onChange={() => setCalorieIntake(true)}
              />
            </Form.Group>
          </Form>
          <Form className="mt-3">
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
                      name="group2"
                      type={"radio"}
                      id={`inline-radio-1`}
                      onChange={() => setGender(true)}
                    />
                    <Form.Check
                      inline
                      label="Woman"
                      name="group2"
                      type={"radio"}
                      id={`inline-radio-2`}
                      onChange={() => setGender(false)}
                    />
                  </Form.Group>
                  <Col>
                    <Form.Group controlId="height">
                      <Form.Control
                        onChange={(e) => (height = Number(e.target.value))}
                        min="0"
                        max="250"
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
                        max="220"
                        type="number"
                        placeholder="Weight"
                      />
                    </Form.Group>
                  </Col>
                </Row>
              </Form>
            </Form.Group>
          </Form>

          {calorieIntakeCalc && (
            <DropdownButton id="dropdown-activity-level" title={activityTitle}>
              <Dropdown.Item
                onClick={() => handleSelectActivity(activityLevel.None, "None")}
              >
                None (little or no exercise)
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() =>
                  handleSelectActivity(activityLevel.Lightly, "Sedentary")
                }
              >
                Sedentary (little or no exercise)
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() =>
                  handleSelectActivity(activityLevel.Lightly, "Lightly active")
                }
              >
                Lightly active (exercise 1–3 days/week)
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() =>
                  handleSelectActivity(
                    activityLevel.Moderately,
                    "Moderately active"
                  )
                }
              >
                Moderately active (exercise 3–5 days/week)
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() =>
                  handleSelectActivity(activityLevel.Active, "Active")
                }
              >
                Active (exercise 6–7 days/week)
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() =>
                  handleSelectActivity(activityLevel.VeryActive, "Very active")
                }
              >
                Very active (hard exercise 6–7 days/week)
              </Dropdown.Item>
            </DropdownButton>
          )}
          <Button
            w={"6rem"}
            onClick={() => setBmr(bmrCalculate(gender, activity))}
          >
            Calculate
          </Button>
        </Card.Body>

        <Card.Body className="mb-3">
          {bmr > 100 && <h3>You need {bmr} calories a day</h3>}
        </Card.Body>
      </Card>
    </>
  );
}
