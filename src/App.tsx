import { BrowserRouter, Route, Routes } from "react-router-dom";
<<<<<<< HEAD
import { ExercisePage } from "./pages/exercisePage";
import { CalculatorPage } from "./pages/calculatorPage";
import { TipsPage } from "../src/components/tipsPage/tipsPage";
import LandingPage from "./pages/LandingPage";
import { HeaderComponent } from "./components/header/headerComponent";
import Footer from "./components/Footer";
=======
import { ExercisePage } from "../src/components/exercisePage/exercisePage";
import { CalculatorPage } from "../src/components/calculatorPage/calculatorPage";
import { FoodPage} from "../src/components/foodPage/foodPage"
>>>>>>> foodTest

function App() {
  return (
    <BrowserRouter>
      <HeaderComponent />
      <Routes>
<<<<<<< HEAD
        <Route path="/exercise" element={<ExercisePage />} />
        <Route path="/calculators" element={<CalculatorPage />} />
        <Route path="/tips" element={<TipsPage />} />
        <Route path="/" element={<LandingPage />}></Route>
=======
        <Route path="/" element={<HeaderComponent />}>
          <Route path="exercise" element={<ExercisePage />} />
          <Route path="calculators" element={<CalculatorPage />} />
          <Route path="food-and-helth" element={<FoodPage/>}/>
        </Route>
>>>>>>> foodTest
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
