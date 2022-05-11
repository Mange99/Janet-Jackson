import { Button } from "@chakra-ui/react";
import { MouseEventHandler } from "react";
import { ExerciseProps } from "./types";

interface filterProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
  buttonName: string;
}

const FilterButton = (props: filterProps) => {
  return (
    <>
      <Button
        w="100%"
        backgroundColor="white"
        _focus={{
          boxShadow: 0,
        }}
        onClick={props.onClick}
      >
        {props.buttonName}
      </Button>
    </>
  );
};
export default FilterButton;
