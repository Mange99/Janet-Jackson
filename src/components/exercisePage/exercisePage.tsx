import { Box, Button, Grid, Text } from "@chakra-ui/react";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { ExerciseCardGrid } from "../exerciseCardGrid/exerciseCardGrid";
import { ExerciseProps } from "../types";

const exercises: ExerciseProps[] = [
  {
    name: "Abs",
    bodyPart: "Abs",
    equipment: "body weight",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0001.gif",
    id: "0001",
    target: "Abs",
    bodyPartImg: "he",
  },
  {
    name: "Abs",
    bodyPart: "Abs",
    equipment: "body weight",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0001.gif",
    id: "0001",
    target: "Abs",
    bodyPartImg: "he",
  },
  {
    name: "Abs",
    bodyPart: "Abs",
    equipment: "body weight",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0001.gif",
    id: "0001",
    target: "abs",
    bodyPartImg: "he",
  },
  {
    name: "Legs",
    bodyPart: "Legs",
    equipment: "body weight",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0001.gif",
    id: "0001",
    target: "abs",
    bodyPartImg: "he",
  },
  {
    name: "Arms",
    bodyPart: "Arms",
    equipment: "body weight",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0001.gif",
    id: "0001",
    target: "abs",
    bodyPartImg: "he",
  },
];

const allExcersices = () => {
  let bodyParts: string[] = [exercises[0].bodyPart];

  exercises.map((e) => {
    if (!bodyParts.includes(e.bodyPart)) {
      bodyParts.push(e.bodyPart);
    }
  });
  return bodyParts;
};

const specific = (bodyPart: string) => {
  return exercises.filter((e) => e.bodyPart == bodyPart);
};

export const ExercisePage = () => {
  const [test, setTest] = useState(exercises);
  const [title, setTitle] = useState("All excercises");

  const showSpecific = (exercises: ExerciseProps[], title: string) => {
    setTest(exercises);
    setTitle(title);
  };

  return (
    <Box position={"relative"}>
      <Grid gridGap={2} p={4} position="absolute">
        <Text fontSize="lg" fontWeight="bold" align="center">
          Filter specific bodypart
        </Text>
        <Button
          w="100%"
          backgroundColor="white"
          _focus={{
            boxShadow: 0,
          }}
          onClick={() => {
            showSpecific(exercises, "All exercises");
          }}
        >
          Show all
        </Button>
        {allExcersices().map((e) => {
          return (
            <Button
              w="100%"
              backgroundColor="white"
              _focus={{
                boxShadow: 0,
              }}
              onClick={() => {
                showSpecific(specific(e), e);
              }}
            >
              {e}
            </Button>
          );
        })}
      </Grid>
      <Box p="4" w="60%" margin="auto">
        <Text as="h2" fontSize={"2xl"} fontWeight="bold" mb="8px">
          {title}
        </Text>
        <ExerciseCardGrid exercises={test} />
      </Box>
    </Box>
  );
};
