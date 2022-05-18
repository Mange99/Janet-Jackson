import { Box, Flex, Text } from "@chakra-ui/react";
import FilterButton from "./filterButton";
import { Button } from "../components/button";
import { useState } from "react";
import { ExerciseProps } from "./types";

interface FilterProps {
  exercises: ExerciseProps[];
  showSpecific: (Specificexercises: ExerciseProps[], title: string) => void;
}

const Filters = ({ exercises, showSpecific }: FilterProps) => {
  const [noOfBody, setNoOfBody] = useState(3);
  const [noOfEquipment, setNoOfEquipment] = useState(4);

  const allExcersices = () => {
    let bodyParts: string[] = [];

    exercises.forEach((e) => {
      if (!bodyParts.includes(e.bodyPart)) {
        bodyParts.push(e.bodyPart);
      }
    });
    return bodyParts;
  };

  const allEquipments = () => {
    let equipments: string[] = [];

    exercises.forEach((eq) => {
      if (!equipments.includes(eq.equipment)) {
        equipments.push(eq.equipment);
      }
    });
    return equipments;
  };

  const specific = (bodyPart: string) => {
    return exercises.filter((e) => e.bodyPart === bodyPart);
  };

  const specificEquipment = (equipment: string) => {
    return exercises.filter((eq) => eq.equipment === equipment);
  };

  const showMoreBody = () => {
    if (noOfBody < allExcersices().length) {
      setNoOfBody(allExcersices().length);
    } else {
      setNoOfBody(3);
    }
  };

  const showMoreEquipment = () => {
    if (noOfEquipment < allEquipments().length) {
      setNoOfEquipment(allEquipments().length);
    } else {
      setNoOfEquipment(3);
    }
  };
  return (
    <Flex direction={"column"} gap={2} p={4}>
      <Text
        fontSize={{ base: "lg", mg: "md" }}
        fontWeight="bold"
        align="center"
      >
        Filter specific bodypart
      </Text>
      <FilterButton
        buttonName="Show all"
        onClick={() => {
          showSpecific(exercises, "All exercises");
        }}
      />
      {allExcersices()
        .slice(0, noOfBody)
        .map((e) => {
          return (
            <FilterButton
              buttonName={e}
              onClick={() => {
                showSpecific(specific(e), e);
              }}
            />
          );
        })}
      <Button onClick={showMoreBody}>
        {noOfBody < allExcersices().length
          ? "All body parts"
          : "Less body parts"}
      </Button>
      <Text fontSize="lg" fontWeight="bold" align="center">
        Filter specific equipment
      </Text>
      {allEquipments()
        .slice(0, noOfEquipment)
        .map((eq) => {
          return (
            <FilterButton
              buttonName={eq}
              onClick={() => {
                showSpecific(specificEquipment(eq), eq);
              }}
            />
          );
        })}
      <Button onClick={showMoreEquipment}>
        {noOfEquipment < allEquipments().length
          ? "All equipment"
          : "Less equipment"}
      </Button>
    </Flex>
  );
};
export default Filters;
