import { HeaderComponent } from "./components/header/headerComponent";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ExercisePage } from "../src/components/exercisePage/exercisePage";
import { CalculatorPage } from "../src/components/calculatorPage/calculatorPage";
import { TipsPage } from "../src/components/tipsPage/tipsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HeaderComponent />}>
          <Route path="exercise" element={<ExercisePage />} />
          <Route path="calculators" element={<CalculatorPage />} />
          <Route path="tips" element={<TipsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
