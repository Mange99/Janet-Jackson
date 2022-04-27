import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { useState, useReducer} from "react";

const carbPercentageLow: number = 0.45;
const carbPercentageHigh: number = 0.65;
const proteinPercentageLow: number = 0.10;
const proteinPercentageHigh: number = 0.35;
const fatPercentageLow: number = 0.20
const fatPercentageHigh: number = 0.35

export const MacroCalculator = () => {

    //const [calorieIntake, setCalorieIntake] = useState(0);
    const [showMacros, setShowMacros] = useState(false);
    const [oldCalorieIntake, setOldCalorieIntake] = useState(0);
    /*
    const [carbsLow, setCarbsLow] = useState(0);
    const [carbsHigh, setCarbsHigh] = useState(0);
    const [proteinLow, setProteinLow] = useState(0);
    const [proteinHigh, setProteinHigh] = useState(0);
    const [fatLow, setFatLow] = useState(0);
    const [fatHigh, setFatHigh] = useState(0);
    */
    type Action = 
        | {type: "Calculate"}
        | {type: "Calories", calories: number};


    type State =  {
      calorieIntake: number,
      carbsLow: number,
      carbsHigh: number,
      proteinLow: number,
      proteinHigh: number,
      fatLow: number,
      fatHigh: number
    }
    
    const initialState: State = {
      calorieIntake: 0,
      carbsLow: 0,
      carbsHigh: 0,
      proteinLow: 0,
      proteinHigh: 0,
      fatLow: 0,
      fatHigh: 0
    }

    const reducer = (state: State, action: Action): State => {
        switch(action.type) {
          case 'Calculate':
            return {
              ...state,
              carbsLow: Math.round(state.calorieIntake*carbPercentageLow), 
              carbsHigh: Math.round(state.calorieIntake*carbPercentageHigh),
              proteinLow: Math.round(state.calorieIntake*proteinPercentageLow),
              proteinHigh: Math.round(state.calorieIntake*proteinPercentageHigh),
              fatLow: Math.round(state.calorieIntake*fatPercentageLow),
              fatHigh: Math.round(state.calorieIntake*fatPercentageHigh)
             }
           case 'Calories':   
            return {
              ...state,
              calorieIntake: action.calories
            }
             
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    /*
    const macroCalc = () => {
        setCarbsLow(Math.round(calorieIntake*carbPercentageLow));
        setCarbsHigh(Math.round(calorieIntake*carbPercentageHigh));
        setProteinLow(Math.round(calorieIntake*proteinPercentageLow));
        setProteinHigh(Math.round(calorieIntake*proteinPercentageHigh));
        setFatLow(Math.round(calorieIntake*fatPercentageLow));
        setFatHigh(Math.round(calorieIntake*fatPercentageHigh));
    }
*/
    return (
        <>
          <Card style={{ width: "20rem", height: "18rem" }}>
            <Card.Body>
              <Card.Title>Macronutrient Calculator</Card.Title>
    
              <Form>
                <Form.Group className="mb-3">
                  <Form>
                    <Row>
                      <Col>
                        <Form.Group controlId="calorieIntake">
                          <Form.Control
                            onChange={(e) => (dispatch({type: "Calories", calories: Number(e.target.value)}))}
                            min="0"
                            max="30000"
                            type="number"
                            placeholder="Enter your daily calorie intake"
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                  </Form>
                </Form.Group>
              </Form>
    
              <Button onClick={() => dispatch({type: "Calculate"})} variant="primary">
                Calculate
              </Button>
            </Card.Body>
            <Card.Body>
                 {showMacros && 
                    <div className="mb-4">
                        <h3 className="mb-2">Carbohydrates: {state.carbsLow} - {state.carbsHigh} Grams/Day</h3>
                        <h3 className="mb-2">Protein: {state.proteinLow} - {state.proteinHigh} Grams/Day</h3>
                        <h3>Fat: {state.fatLow} - {state.fatHigh} Grams/Day</h3>
                    </div>
                }
            </Card.Body>
          </Card>
        </>
      );
}