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
} from "@chakra-ui/react";
import { MdRemove } from "react-icons/md";
import { Button } from "./button";
import { ExerciseProps, SessionProps } from "./types";

interface SessionTableProps {
  error: boolean;
  errorType: string;
  session: SessionProps;
  setSession: React.Dispatch<React.SetStateAction<SessionProps>>;
  handleClick: () => void;
  removeExercises: (e: ExerciseProps) => void;
}

const SessionTable = (props: SessionTableProps) => {
  return (
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
          value={props.session.sessionTitle}
          placeholder="session name"
          onChange={(e) => {
            e.preventDefault();
            props.setSession({
              ...props.session,
              sessionTitle: e.target.value,
            });
          }}
        />
        {props.session.exersiceProps.map((e) => {
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
                onClick={() => props.removeExercises(e)}
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

        <Button onClick={props.handleClick} w="80%" margin="auto" mt={8}>
          Save Session
        </Button>

        {props.error ? (
          <Text color="red" m="auto">
            {props.errorType}
          </Text>
        ) : null}
      </Flex>
    </Box>
  );
};

export default SessionTable;
