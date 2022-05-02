import { BmiCalculator } from "../components/calculatorCards/bmiCalculator";
import { BmrCalculator } from "../components/calculatorCards/bmrCalculator";
import { MacroCalculator } from "../components/calculatorCards/macroCalculator";
import axios from "axios";
import {exercise} from "../models/exercise"

async function postTest() {
  try {
    const {data} = await axios.post<exercise>(
      "localhost:8080",{
        name: "abs",
        bodyPart: "abs",
        equipment: "abs",
        gifUrl: "abs",
        id: "1",
        target: "abs",
        bodyPartImg: "abs"
      },
      {headers: {
        'Content-Type': 'application/json',
        Accept: 'aaplication/json'
      },
    },
    );
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log('error message: ', error.message);
      // 👇️ error: AxiosError<any, any>
      return error.message;
    } else {
      console.log('unexpected error: ', error);
      return 'An unexpected error occurred';
    }
  }
}

export function CalculatorPage() {
  return (
    <div className="d-flex justify-content-evenly flex-wrap mt-5" >
      <BmiCalculator/>
      <BmrCalculator/>
      <MacroCalculator/>
    </div>

  );
}
