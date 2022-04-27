import { BmiCalculator } from "../calculatorCards/bmiCalculator";
import { BmrCalculator } from "../calculatorCards/bmrCalculator";

export function CalculatorPage() {
  return (
    <div>
      <BmiCalculator />
      <BmrCalculator/>
    </div>
  );
}
