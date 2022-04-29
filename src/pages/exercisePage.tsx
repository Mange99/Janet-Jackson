import { Box, Button, Grid, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { ExerciseCardGrid } from "../components/exerciseCardGrid/exerciseCardGrid";
import { ExerciseProps } from "../components/types";

export const ExercisePage = () => {
  const [exercises, setAllExcercises] = useState<ExerciseProps[]>([]);
  const [excercises, setExcercises] = useState(exercises);
  const [title, setTitle] = useState("All excercises");

  const showSpecific = (Specificexercises: ExerciseProps[], title: string) => {
    setExcercises(Specificexercises);
    setTitle(title);
  };

  const allExcersices = () => {
    let bodyParts: string[] = [];

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

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
        "X-RapidAPI-Key": "9ba136ae5dmsh149a878f4d9bc65p1cdcf8jsnbbef50b194fa",
      },
    };

    fetch("https://exercisedb.p.rapidapi.com/exercises", options)
      .then((response) => response.json())
      .then((response) => {
        setAllExcercises(response);
        setExcercises(response);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      {exercises && (
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
            {<ExerciseCardGrid exercises={excercises} />}
          </Box>
        </Box>
      )}
    </div>
  );
};
