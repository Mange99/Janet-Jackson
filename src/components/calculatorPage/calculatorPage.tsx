import { BmiCalculator } from "../calculatorCards/bmiCalculator";
import { BmrCalculator } from "../calculatorCards/bmrCalculator";
import { MacroCalculator } from "../calculatorCards/macroCalculator";

export function CalculatorPage() {
  return (
    <div className="d-flex justify-content-evenly flex-wrap mt-5" >
      <BmiCalculator/>
      <BmrCalculator/>
      <MacroCalculator/>
    </div>

  );
}
