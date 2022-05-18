import {
  Box,
  Flex,
  Heading,
  IconButton,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { ExerciseCardGrid } from "../components/exerciseCardGrid/exerciseCardGrid";
import {
  ExerciseProps,
  ExerciseSession,
  SessionProps,
} from "../components/types";
import { Button as SpecialButton } from "../components/button";

import { MdRemove } from "react-icons/md";
import { SessionService } from "../services/sessionService";
import FilterButton from "../components/filterButton";
import { useStateContext } from "../contexts/tokenContext";

async function sendSession(data: SessionProps) {
  const sessionService = new SessionService();
  return await sessionService.createSession(data);
}

export const ExercisePage = () => {
  const [exercises, setAllExcercises] = useState<ExerciseProps[]>([]);
  const [excercises, setExcercises] = useState(exercises);
  const [title, setTitle] = useState("All excercises");
  const [noOfExercises, setnoOfExercises] = useState(30);
  const [noOfBody, setNoOfBody] = useState(3);
  const [noOfEquipment, setNoOfEquipment] = useState(4);
  const { state, dispatch } = useStateContext();

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
              <SpecialButton onClick={showMoreBody}>
                {noOfBody < allExcersices().length ? "Show all" : "Show less"}
              </SpecialButton>
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
              <SpecialButton onClick={showMoreEquipment}>
                {noOfEquipment < allEquipments().length
                  ? "Show all"
                  : "Show less"}
              </SpecialButton>
            </Flex>
          </Box>

          <Box p={4} w={{ base: "100%", md: "70%" }} mx="auto">
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
              <SpecialButton p={4} mx="auto" my={8} onClick={showMoreExercises}>
                Load More
              </SpecialButton>
            </Flex>
          </Box>

          <Box w={{ base: "80%", md: "20%" }} mx="auto" mb={8}>
            {state.token != "" && (
              <Box
                position={"relative"}
                w={"full"}
                mt={4}
                ml={2}
                pl={2}
                borderLeft={"1px"}
              >
                <Heading textAlign={"center"}>Session</Heading>
                <Flex direction={"column"}>
                  <Text>Name your session</Text>
                  <Input
                    w="80%"
                    mb={4}
                    type="name"
                    value={session.sessionTitle}
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
                      <Box w="80%" mt={4}>
                        {e.name}
                        <IconButton
                          mr={4}
                          position={"absolute"}
                          right={0}
                          aria-label={""}
                          icon={<MdRemove />}
                          boxSize={8}
                          onClick={() => removeExercises(e)}
                        />
                        <Flex
                          direction={{ base: "column", xl: "row" }}
                          align="center"
                          my="2"
                          gap={1}
                        >
                          <Text>Sets: </Text>
                          <NumberInput
                            defaultValue={3}
                            min={0}
                            max={99}
                            size={"sm"}
                            onChange={(value) => {
                              e.sets = Number(value);
                            }}
                          >
                            <NumberInputField />
                            <NumberInputStepper>
                              <NumberIncrementStepper />
                              <NumberDecrementStepper />
                            </NumberInputStepper>
                          </NumberInput>
                          <Text>Reps: </Text>
                          <NumberInput
                            defaultValue={10}
                            min={0}
                            max={99}
                            size={"sm"}
                            onChange={(value) => {
                              e.reps = Number(value);
                            }}
                          >
                            <NumberInputField />
                            <NumberInputStepper>
                              <NumberIncrementStepper />
                              <NumberDecrementStepper />
                            </NumberInputStepper>
                          </NumberInput>
                        </Flex>
                      </Box>
                    );
                  })}

                  <SpecialButton
                    onClick={handleClick}
                    w="80%"
                    margin="auto"
                    mt={8}
                  >
                    Save Session
                  </SpecialButton>

                  {error ? (
                    <Text color="red" m="auto">
                      {errorType}
                    </Text>
                  ) : null}
                </Flex>
              </Box>
            )}
          </Box>
        </Flex>
      )}
    </Box>
  );
};
