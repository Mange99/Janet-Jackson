import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ExercisePage } from "./pages/exercisePage";
import { CalculatorPage } from "./pages/calculatorPage";
import { TipsPage } from "../src/components/tipsPage/tipsPage";
import LandingPage from "./pages/LandingPage";
import { HeaderComponent } from "./components/header/headerComponent";
import Footer from "./components/Footer";
import { FoodPage} from "../src/components/foodPage/foodPage"


function App() {
  return (
    <BrowserRouter>
      <HeaderComponent />
      <Routes>

          <Route path="exercise" element={<ExercisePage />} />
          <Route path="calculators" element={<CalculatorPage />} />
          <Route path="food-and-helth" element={<FoodPage/>}/>
          <Route path="/tips" element={<TipsPage />} />
     
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
