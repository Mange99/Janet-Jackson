import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Icon,
  Text,
} from "@chakra-ui/react";
import { MutableRefObject, useRef } from "react";
import Hero from "./Hero";
import Excercise from "../res/images/excercise.png";
import Food from "../res/images/exampleFood.png";

import { MdArrowRightAlt } from "react-icons/md";
import { Link } from "react-router-dom";
import SummarizeCard from "../components/summarizeCard";
import { BmiCalculator } from "../components/calculatorCards/bmiCalculator";

const LandingPage = () => {
  const scrollToNext = () => {
    workoutsRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const workoutsRef =
    useRef<HTMLDivElement>() as MutableRefObject<HTMLDivElement>;

  return (
    <Box position="relative">
      <Hero scrollToNext={scrollToNext} />
      <Container maxW="70%" ref={workoutsRef}>
        <Box textAlign={"center"}>
          <Heading pt="24" size={"2xl"}>
            Be stronger than your excuses+
          </Heading>
          <Link to={"/tips"}>
            <Button mt="8">
              <Text as="h2" fontSize={"larger"}>
                For more inspiration and tips
                <Icon as={MdArrowRightAlt} boxSize={6} />
              </Text>
            </Button>
          </Link>{" "}
        </Box>
        <Heading pt="24" fontWeight={"bold"} textAlign="center" size={"xl"}>
          Workouts
        </Heading>
        <Grid templateColumns="repeat(3, 1fr)" gap={6} mt="8">
          <GridItem w="80%" margin={"auto"}>
            <SummarizeCard
              image={Excercise}
              title="Choose from 1000+ excercises"
              description="With ___ you can create your own workout sessions and star your
              favourite workouts. With guides showing you how to perform the
              excercises"
            />
          </GridItem>
          <GridItem w="80%" margin={"auto"}>
            <SummarizeCard
              image={Excercise}
              title="Choose from 1000+ excercises"
              description="With ___ you can create your own workout sessions and star your
              favourite workouts. With guides showing you how to perform the
              excercises"
            />
          </GridItem>
          <GridItem w="80%" margin={"auto"}>
            <SummarizeCard
              image={Excercise}
              title="Choose from 1000+ excercises"
              description="With ___ you can create your own workout sessions and star your
              favourite workouts. With guides showing you how to perform the
              excercises"
            />
          </GridItem>
        </Grid>
        <Box margin="auto" textAlign={"center"}>
          <Link to={"/exercise"}>
            <Button textDecoration={"underline"} mt="8">
              Learn more
              <Icon as={MdArrowRightAlt} boxSize={4} mt="1" />
            </Button>
          </Link>
        </Box>
        <Heading pt="24" fontWeight={"bold"} textAlign="center" size={"xl"}>
          Food and Health
        </Heading>
        <Grid templateColumns="repeat(3, 1fr)" gap={6} mt="8">
          <GridItem w="80%" margin={"auto"}>
            <SummarizeCard
              image={Food}
              title="Choose from 1000+ excercises"
              description="With ___ you can create your own workout sessions and star your
              favourite workouts. With guides showing you how to perform the
              excercises"
            />
          </GridItem>
          <GridItem w="80%" margin={"auto"}>
            <SummarizeCard
              image={Food}
              title="Choose from 1000+ excercises"
              description="With ___ you can create your own workout sessions and star your
              favourite workouts. With guides showing you how to perform the
              excercises"
            />
          </GridItem>
          <GridItem w="80%" margin={"auto"}>
            <SummarizeCard
              image={Food}
              title="Choose from 1000+ excercises"
              description="With ___ you can create your own workout sessions and star your
              favourite workouts. With guides showing you how to perform the
              excercises"
            />
          </GridItem>
        </Grid>
        <Box margin="auto" textAlign={"center"}>
          <Link to={"/food-and-health"}>
            <Button textDecoration={"underline"} mt="8">
              Learn more
              <Icon as={MdArrowRightAlt} boxSize={4} mt="1" />
            </Button>
          </Link>
        </Box>
        <Box
          w="fit-content"
          margin={"auto"}
          textAlign="center"
          pt="24"
          position={"relative"}
        >
          <Heading size="xl">Calculate your stats</Heading>
          <Text pt="2" pb="4">
            You can calculate different something blah blah
          </Text>
          <Box w="fit-content" margin={"auto"}>
            <BmiCalculator />
          </Box>
          <Link to={"/calculators"}>
            <Button textDecoration={"underline"} mt="4" left="0">
              Learn more
              <Icon as={MdArrowRightAlt} boxSize={4} mt="1" />
            </Button>
          </Link>
        </Box>
      </Container>
    </Box>
  );
};

export default LandingPage;
