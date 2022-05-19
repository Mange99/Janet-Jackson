import { useState } from "react";
import { Button, Card, Col, Form, Row, DropdownButton, Dropdown } from "react-bootstrap";
import "./calculatorStyles.css"

let age: number = 0;
let height: number = 0;
let weight: number = 0;

// https://examine.com/nutrition/protein-intake-calculator/ Source for goal 
// https://healthyeating.sfgate.com/recommended-daily-protein-men-vs-women-5141.html for gender difference (men - 56, women - 46) 
// -> we then "assume" this is a linear-relation and men = 1, and women = 0.82 

 // Sedentary (little or no exercise): AMR = BMR x 1.2
 // Lightly active (exercise 1–3 days/week): AMR = BMR x 1.375
 // Moderately active (exercise 3–5 days/week): AMR = BMR x 1.55
 // Active (exercise 6–7 days/week): AMR = BMR x 1.725
 // Very active (hard exercise 6–7 days/week): AMR = BMR x 1.9
 // taken from https://www.verywellfit.com/how-many-calories-do-i-need-each-day-2506873
 // Not exactly comparable to protein as the macros aren't perfectly balanced--but for now this is the best we can do until we can find a better source

// age is not used yet! and neither is height--still looking for good sources for these! They are currently commented out.

enum activityLevel {
    None = 1,
    Sedentary = 1.2,
    Lightly = 1.375,
    Moderately = 1.55,
    Active = 1.725,
    VeryActive = 1.9
}

enum typeOfGoal {
    maintenacne = 1,
    muscleGain = 1.3,
    fatLoss = 0.8
}

function proteinCalculate(gender: boolean, activity: activityLevel, type: typeOfGoal) {
  return gender ? Math.round(weight * (0.8)*1*(activity*0.8)*type) : Math.round(weight * (0.8)*0.82*(activity*0.8)*type) ;
}

export function ProteinCalculator() {

    const [gender, setGender] = useState(true);  
    const [protein, setProtein] = useState(0);
    const [proteinIntakeCalc, setProteinIntake] = useState(true);
    const [typeOfGoals, setType] = useState(typeOfGoal.maintenacne);
    const [activity, setActivityLevel] = useState(activityLevel.None);
    const [activityTitle, setActivityTitle] = useState("Activity Level")

    const handleSelectActivity = (activityInput: activityLevel, title: String) => {
        setActivityLevel(activityInput);
        setActivityTitle(String(title));
    }

  return (
    <>
      <Card style={{ width: "25rem" }}>
        <Card.Body>
          <Card.Title>Protein Calculator</Card.Title>

          <Form>
            <Form.Group>
                <Form.Check
                    inline
                    label="Weight maintenacne"
                    name="group1"
                    type={"radio"}
                    id={`inline-radio-5`}
                    onChange={() => (setProteinIntake(true), (setType(typeOfGoal.maintenacne)))}
                />
                <Form.Check
                    inline
                    label="Muscle gain"
                    name="group1"
                    type={"radio"}
                    id={`inline-radio-6`}
                    onChange={() => (setProteinIntake(true), (setType(typeOfGoal.muscleGain)))}
                />
                <Form.Check
                    inline
                    label="Weight or fat loss"
                    name="group1"
                    type={"radio"}
                    id={`inline-radio-7`}
                    onChange={() => (setProteinIntake(true), (setType(typeOfGoal.fatLoss)))}
                />
            </Form.Group>    
          </Form>  
          <Form className="mt-3">
            <Form.Group className="mb-3">
              <Form>
                <Row>
                {/* <Col> 
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
                            id={`inline-radio-8`}
                            onChange={() => (setGender(true))}
                            />
                        <Form.Check
                            inline
                            label="Woman"
                            name="group2"
                            type={"radio"}
                            id={`inline-radio-9`}
                            onChange={() => (setGender(false))}
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
                  </Col>*/}
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

        {proteinIntakeCalc && (
            <DropdownButton 
                id="dropdown-activity-level" 
                title={activityTitle}
                >
                <Dropdown.Item onClick={() => (handleSelectActivity(activityLevel.None, "None"))}>None (little or no exercise)</Dropdown.Item>
                <Dropdown.Item onClick={() => (handleSelectActivity(activityLevel.Lightly, "Sedentary"))}>Sedentary (little or no exercise)</Dropdown.Item>
                <Dropdown.Item onClick={() => (handleSelectActivity(activityLevel.Lightly, "Lightly active"))}>Lightly active (exercise 1–3 days/week)</Dropdown.Item>
                <Dropdown.Item onClick={() => (handleSelectActivity(activityLevel.Moderately, "Moderately active"))}>Moderately active (exercise 3–5 days/week)</Dropdown.Item>
                <Dropdown.Item onClick={() => (handleSelectActivity(activityLevel.Active, "Active"))}>Active (exercise 6–7 days/week)</Dropdown.Item>
                <Dropdown.Item onClick={() => (handleSelectActivity(activityLevel.VeryActive, "Very active"))}>Very active (hard exercise 6–7 days/week)</Dropdown.Item>
            </DropdownButton>
        )}

        </Card.Body>
        <Button style={{width: "5.7rem"}} className="ms-3" onClick={() => setProtein(proteinCalculate(gender, activity, typeOfGoals))} variant="primary">
            Calculate
          </Button>
        <Card.Body className="mt-2 mb-3">
                {<h3>You need on average {protein} grams of protein a day</h3>}
        </Card.Body>
      </Card>
    </>
  );
}