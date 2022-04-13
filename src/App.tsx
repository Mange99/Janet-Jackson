import { Flex } from "@chakra-ui/react";
import ButtonOne from "./components/deaBtn/buttonOne";
import MagnusBtn from "./components/MagnusBtn";
import TbButton from "./components/TorbjornBtn";
import {HeaderComponent} from "./components/header/headerComponent";
import { Container } from "react-bootstrap";
 
//import { Container } from "@chakra-ui/react";
// a lot of changes

function App() {
  return (
      <div>
      <HeaderComponent/>
      <ButtonOne />
      <MagnusBtn />
      <TbButton />
      {/* Lägg in en egen knapp me ert namn här under*/}
      </div>
  );
}

export default App;
