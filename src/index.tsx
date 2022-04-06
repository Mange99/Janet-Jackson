import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {HeaderComponent} from "../src/components/header/headerComponent";
import {ExerciseCard} from "../src/components/exerciseCard/exerciseCard";
import {ExerciseCardGrid} from "../src/components/exerciseCardGrid/exerciseCardGrid";

ReactDOM.render(
  <React.StrictMode>

      <BrowserRouter>
      <Routes>
      <Route path ="/" element={<HeaderComponent/>}>
        <Route path="exercise" element={<ExerciseCardGrid/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
  
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
