import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ExercisePage } from "./pages/exercisePage";
import { CalculatorPage } from "./pages/calculatorPage";
import LandingPage from "./pages/LandingPage";
import RegisterPage from "./pages/registerPage";
import { TipsPage } from "../src/components/tipsPage/tipsPage";
import { HeaderComponent } from "./components/header/headerComponent";
import { FoodPage } from "./pages/foodPage";
import { ProfilePage } from "../src/pages/profilePage";
//import { Token, useToken } from "./contexts/useToken";
import LoginPage from "./pages/loginPage";
import { useEffect, useState } from "react";
import { UserService } from "./services/userService";
import { useStateContext } from "./contexts/tokenContext";
//import * as dotenv from "dotenv";
//dotenv.config({path: "./env"});

function App() {
 // const { token, setToken } = useToken();
  const [loggedIn, setLoggedIn] = useState(false);
  const {state, dispatch} = useStateContext();
  const {token} = state;

  useEffect(() => {
    const service = new UserService();
    if(state.token != "") {
      service.authUser(token).then((data) => {
        console.log(data);
        if(!data) {
          dispatch?.({
            type: "DELETE_TOKEN"
          })
        }
        setLoggedIn(data);
      })
      setLoggedIn(false);
    }
  
  }, [])

  return (
    <BrowserRouter>
      <HeaderComponent />
      <Routes>
        <Route path="/exercise" element={<ExercisePage />} />
        <Route path="/calculators" element={<CalculatorPage />} />
        <Route path="/tips" element={<TipsPage />} />
        <Route path="food-and-health" element={<FoodPage />} />
        
        {state.token == "" ? (
          <Route>
            <Route path="/login" element={<LoginPage/>} />
            <Route
              path="/register"
              element={<RegisterPage/>}
            />
          </Route>
        ) : (
          <Route path="Profile-Page" element={<ProfilePage />} />
        )}
        <Route path="/" element={<LandingPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
