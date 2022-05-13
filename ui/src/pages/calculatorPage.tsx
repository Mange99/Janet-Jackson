import { BmiCalculator } from "../components/calculatorCards/bmiCalculator";
import { BmrCalculator } from "../components/calculatorCards/bmrCalculator";
import { MacroCalculator } from "../components/calculatorCards/macroCalculator";
import { ProteinCalculator } from "../components/calculatorCards/proteinCalculator";
import { CalorieToEnergyCalculator} from "../components/calculatorCards/CalorieToEnergyCalculator";
import axios from "axios";
import {exercise} from "../models/exercise"
import {UserService} from "../services/userService"
 
export function CalculatorPage() {
  return (
    <div className="d-flex justify-content-evenly flex-wrap mt-5" >
      <BmiCalculator/>
      <BmrCalculator/>
      <MacroCalculator/>
      <ProteinCalculator/>
      <CalorieToEnergyCalculator/>
    </div>

  );
}
