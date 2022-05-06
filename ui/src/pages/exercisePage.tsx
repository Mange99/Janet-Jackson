import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  IconButton,
  Input,
  Text,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { ExerciseCardGrid } from "../components/exerciseCardGrid/exerciseCardGrid";
import { ExerciseProps, SessionProps } from "../components/types";

import { MdRemove } from "react-icons/md";
import { SessionService } from "../services/sessionService";

async function sendSession(data: SessionProps) {
  const sessionService = new SessionService();
  return await sessionService.createSession(data);
}

export const ExercisePage = () => {
  const [exercises, setAllExcercises] = useState<ExerciseProps[]>([]);
  const [excercises, setExcercises] = useState(exercises);
  const [title, setTitle] = useState("All excercises");

  const [session, setSession] = useState<SessionProps>({
    sessionTitle: "",
    exersiceProps: [],
  });

  const [error, setError] = useState(false);
  const [errorType, setErrorType] = useState("");

  const handleClick = () => {
    if (session.sessionTitle.length === 0) {
      setErrorType("Enter session name!");
      setError(true);
    } else if (session.exersiceProps.length === 0) {
      setErrorType("Pliz add some exercises!");
    } else {
      setError(false);

      sendSession(session).then((data) => {
        if (data.data.success === true) {
          console.log("all good");
        } else if (
          data.data.success === false &&
          data.data.status === "Session already exists"
        ) {
          console.log("all bad");
        }
      });
    }
  };

  const showSpecific = (Specificexercises: ExerciseProps[], title: string) => {
    setExcercises(Specificexercises);
    setTitle(title);
  };

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

  const addExercises = (e: ExerciseProps) => {
    if (session.exersiceProps.includes(e)) {
      setErrorType("Already added!");
      setError(true);
    } else {
      setError(false);
      setSession((prev) => ({
        ...prev,
        exersiceProps: [...prev.exersiceProps, e],
      }));
    }
  };

  const removeExercises = (e: ExerciseProps) => {
    setSession((prev) => ({
      ...prev,
      exersiceProps: prev.exersiceProps.filter((obj) => {
        return obj !== e;
      }),
    }));
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
            <Text fontSize="lg" fontWeight="bold" align="center">
              Filter specific equipment
            </Text>
            {allEquipments().map((eq) => {
              return (
                <Button
                  w="100%"
                  backgroundColor="white"
                  _focus={{
                    boxShadow: 0,
                  }}
                  onClick={() => {
                    showSpecific(specificEquipment(eq), eq);
                  }}
                >
                  {" "}
                  {eq}
                </Button>
              );
            })}
          </Grid>
          <Box
            position={"absolute"}
            right="0"
            w="15vw"
            pl="2"
            borderLeft={"1px"}
          >
            <Heading textAlign={"center"}>Session</Heading>
            <Flex direction={"column"}>
              <Text>Name your session</Text>
              <Input
                w="80%"
                mb="4"
                type="name"
                placeholder="session name"
                onChange={(e) => {
                  e.preventDefault();
                  setSession({
                    ...session,
                    sessionTitle: e.target.value,
                  });
                }}
              />
              {session.exersiceProps.map((e) => {
                return (
                  <Box w="80%" mt="4">
                    {e.name}
                    <IconButton
                      mr="4"
                      position={"absolute"}
                      right={0}
                      aria-label={""}
                      icon={<MdRemove />}
                      boxSize={8}
                      onClick={() => removeExercises(e)}
                    ></IconButton>
                  </Box>
                );
              })}

              <Button onClick={handleClick} w="80%" margin="auto" mt="8">
                Save Session
              </Button>
              {error ? (
                <Text color="red" m="auto">
                  {errorType}
                </Text>
              ) : null}
            </Flex>
          </Box>

          <Box p="4" w="60%" margin="auto">
            <Text as="h2" fontSize={"2xl"} fontWeight="bold" mb="8px">
              {title}
            </Text>
            {<ExerciseCardGrid onClick={addExercises} exercises={excercises} />}
          </Box>
        </Box>
      )}
    </div>
  );
};
