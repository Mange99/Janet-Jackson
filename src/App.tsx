import { Flex } from "@chakra-ui/react";
import ButtonOne from "./components/deaBtn/buttonOne";
import MagnusBtn from "./components/MagnusBtn";
import TbButton from "./components/TorbjornBtn";
import HeddaBtn from "./components/HeddaBtn";
import SaraBtn from "./components/SaraBtn";

function App() {
  return (
    <Flex justify={"center"} gap={4} mt="4">
      <ButtonOne />
      <MagnusBtn />
      <TbButton />
      <HeddaBtn />
      <SaraBtn />
      {/* Lägg in en egen knapp me ert namn här under*/}
    </Flex>
  );
}

export default App;
