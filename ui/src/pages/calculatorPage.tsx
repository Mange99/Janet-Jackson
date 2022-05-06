import { BmiCalculator } from "../components/calculatorCards/bmiCalculator";
import { BmrCalculator } from "../components/calculatorCards/bmrCalculator";
import { MacroCalculator } from "../components/calculatorCards/macroCalculator";
import axios from "axios";
import {exercise} from "../models/exercise"
import {UserService} from "../services/userService"
 
export function CalculatorPage() {
  return (
    <div className="d-flex justify-content-evenly flex-wrap mt-5" >
      <BmiCalculator/>
      <BmrCalculator/>
      <MacroCalculator/>
    </div>

  );
}
