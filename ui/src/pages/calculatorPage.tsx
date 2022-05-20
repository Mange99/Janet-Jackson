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
    <div className="d-flex justify-content-center" >
      <div className="d-flex flex-column gap-3">
      <div className="d-flex justify-content-center" >
      <BmiCalculator/>
      </div>
      <div className="d-flex justify-content-center" >
      <BmrCalculator/>
     </div>
      <div className="d-flex justify-content-center" >
      <MacroCalculator/>
      </div>
      <div className="d-flex justify-content-center" >
      <ProteinCalculator/>
      </div>
      <div className="d-flex justify-content-center" >
      <CalorieToEnergyCalculator/>
      </div>

      
      </div>
    </div>

  );
}
