import { BmiCalculator } from "../calculatorCards/bmiCalculator";
import { BmrCalculator } from "../calculatorCards/bmrCalculator";
import { MacroCalculator } from "../calculatorCards/macroCalculator";

export function CalculatorPage() {
  return (
    <div>
      <BmiCalculator />
      <BmrCalculator/>
      <MacroCalculator/>
    </div>
  );
}
