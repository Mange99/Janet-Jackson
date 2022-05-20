import { Box, Flex, Input, Text, useToast } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { ExerciseCardGrid } from "../components/exerciseCardGrid/exerciseCardGrid";
import {
  ExerciseProps,
  ExerciseSession,
  SessionProps,
} from "../components/types";
import { Button } from "../components/button";

import { SessionService } from "../services/sessionService";
import { useStateContext } from "../contexts/tokenContext";
import Filters from "../components/Filters";
import SessionTable from "../components/session";

async function sendSession(data: SessionProps) {
  const sessionService = new SessionService();
  return await sessionService.createSession(data);
}

export const ExercisePage = () => {
  const [exercises, setAllExcercises] = useState<ExerciseProps[]>([]);
  const [excercises, setExcercises] = useState(exercises);
  const [title, setTitle] = useState("All excercises");
  const [noOfExercises, setnoOfExercises] = useState(30);
  const { state, dispatch } = useStateContext();

  const showMoreExercises = () => {
    setnoOfExercises(noOfExercises + noOfExercises);
  };

  const [session, setSession] = useState<SessionProps>({
    token: "",
    sessionTitle: "",
    exersiceProps: [],
  });

  const [error, setError] = useState(false);
  const [errorType, setErrorType] = useState("");

  const toast = useToast();

  const handleClick = () => {
    if (session.sessionTitle.length === 0) {
      setErrorType("Enter session name!");
      setError(true);
    } else if (session.exersiceProps.length === 0) {
      setErrorType("You need to add exercises!");
    } else {
      setError(false);
      sendSession(session).then((data) => {
        if (data.data.success === true) {
          toast({
            title: "Session created.",
            description: "Your session is added to your profile page",
            status: "success",
            duration: 9000,
            isClosable: true,
          });
          setSession((prev) => ({
            ...prev,
            sessionTitle: "",
            exersiceProps: [],
          }));
        } else if (
          data.data.success === false &&
          data.data.status === "Session already exists"
        ) {
          setError(true);
          setErrorType("Session already exists");
        }
      });
    }
  };

  const searchExercises = (exercise: string) => {
    return exercises.filter((e) => e.name.startsWith(exercise));
  };

  const showSpecific = (Specificexercises: ExerciseProps[], title: string) => {
    if (title.length == 0) {
      setTitle("All exercises");
    } else {
      setTitle(title);
    }
    setExcercises(Specificexercises);
  };

  const addExercises = (e: ExerciseProps) => {
    const temp: ExerciseSession = {
      bodyPart: e.bodyPart,
      name: e.name,
      equipment: e.equipment,
      gifUrl: e.gifUrl,
      target: e.target,
      id: e.id,
      bodyPartImg: e.bodyPartImg,
      sets: 3,
      reps: 10,
    };

    const token = state.token;
    if (token != null) {
      if (session.exersiceProps.includes(temp)) {
        setErrorType("Already added!");
        setError(true);
      } else {
        setError(false);
        setSession((prev) => ({
          ...prev,
          token: token.slice(1, -1),
          exersiceProps: [...prev.exersiceProps, temp],
        }));
      }
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
        "X-RapidAPI-Key": "9423e70f59msh77ee0b0ab5c7f76p10e9a2jsn759b6c9ad307",
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
    <Box w="full">
      {exercises && (
        <Flex direction={{ base: "column", md: "row" }}>
          <Box>
            <Filters showSpecific={showSpecific} exercises={exercises} />
          </Box>
          <Box p={4} w={{ base: "100%", md: "65%" }} mx="auto">
            <Text
              as="h2"
              fontSize={{ base: "xl", md: "2xl" }}
              fontWeight="bold"
              mb={4}
            >
              {title}
            </Text>
            <Input
              variant={"flushed"}
              placeholder="Search exercises"
              mb={8}
              w={{ base: "60%", md: "40%" }}
              onChange={(e) => {
                showSpecific(searchExercises(e.target.value), e.target.value);
              }}
            />
            <ExerciseCardGrid
              exercises={excercises.slice(0, noOfExercises)}
              onClick={addExercises}
            />
            <Flex w="full">
              <Button p={4} mx="auto" my={8} onClick={showMoreExercises}>
                Load More
              </Button>
            </Flex>
          </Box>

          <Box w={{ base: "80%", md: "20%" }} mx="auto" mb={8}>
            {state.token != "" && (
              <SessionTable
                error={error}
                errorType={errorType}
                session={session}
                setSession={setSession}
                handleClick={handleClick}
                removeExercises={removeExercises}
              />
            )}
          </Box>
        </Flex>
      )}
    </Box>
  );
};
