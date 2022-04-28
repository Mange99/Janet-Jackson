import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ExercisePage } from "./pages/exercisePage";
import { CalculatorPage } from "./pages/calculatorPage";
import LandingPage from "./pages/LandingPage";
import { HeaderComponent } from "./components/header/headerComponent";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <HeaderComponent />
      <Routes>
        <Route path="/exercise" element={<ExercisePage />} />
        <Route path="/calculators" element={<CalculatorPage />} />
        <Route path="/" element={<LandingPage />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
