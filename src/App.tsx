import { Flex } from "@chakra-ui/react";
import ButtonOne from "./components/deaBtn/buttonOne";
import MagnusBtn from "./components/MagnusBtn";
import TbButton from "./components/TorbjornBtn";
import HeddaBtn from "./components/HeddaBtn";
import Bilalbtn from "./components/Bilalbtn";


function App() {
  return (
    <Flex justify={"center"} gap={4} mt="4">
      <ButtonOne />
      <MagnusBtn />
      <TbButton />
      <HeddaBtn />
      <Bilalbtn />
      {/* Lägg in en egen knapp me ert namn här under*/}
    </Flex>
  );
}

export default App;
