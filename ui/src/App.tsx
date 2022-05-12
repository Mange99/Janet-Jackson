import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ExercisePage } from "./pages/exercisePage";
import { CalculatorPage } from "./pages/calculatorPage";
import LandingPage from "./pages/LandingPage";
import RegisterPage from "./pages/registerPage";
import { TipsPage } from "../src/components/tipsPage/tipsPage";
import { HeaderComponent } from "./components/header/headerComponent";
import { FoodPage } from "../src/components/foodPage/foodPage";
import { ProfilePage } from "../src/pages/profilePage";
import { useToken } from "./components/useToken";
import LoginPage from "./pages/loginPage";

function App() {
  const { token, setToken } = useToken();

  return (
    <BrowserRouter>
      <HeaderComponent />
      <Routes>
        <Route path="/exercise" element={<ExercisePage />} />
        <Route path="/calculators" element={<CalculatorPage />} />
        <Route path="/tips" element={<TipsPage />} />
        <Route path="food-and-health" element={<FoodPage />} />

        {token ? (
          <Route path="Profile-Page" element={<ProfilePage />} />
        ) : (
          <Route>
            <Route path="/login" element={<LoginPage setToken={setToken} />} />
            <Route
              path="/register"
              element={<RegisterPage setToken={setToken} />}
            />
          </Route>
        )}
        <Route path="/" element={<LandingPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
