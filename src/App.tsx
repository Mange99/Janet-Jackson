import {HeaderComponent} from "./components/header/headerComponent";
import { Container } from "react-bootstrap";
 import { BrowserRouter, Route, Routes } from "react-router-dom";
import {ExerciseCard} from "../src/components/exerciseCard/exerciseCard";
import {ExerciseCardGrid} from "../src/components/exerciseCardGrid/exerciseCardGrid";
import {ExercisePage} from "../src/components/exercisePage/exercisePage";

//import { Container } from "@chakra-ui/react";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path ="/" element={<HeaderComponent/>}>
        <Route path="exercise" element={<ExercisePage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
