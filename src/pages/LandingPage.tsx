import {
  Box,
  Button,
  Container,
  Grid,
  GridItem,
  Heading,
  Icon,
  Text,
} from "@chakra-ui/react";
import { MutableRefObject, useRef } from "react";
import Hero from "./Hero";
import Exercise from "../res/images/excercise.png";
import Food from "../res/images/exampleFood.png";
import Filter from "../res/images/filter.png";

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
        <Box w="fit-content" margin="auto">
          <Link to="/tips">
            <Heading
              pt={24}
              pb={4}
              size="2xl"
              bgGradient="linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(33,208,177,1) 49%, rgba(1,25,29,1) 100%)"
              bgClip="text"
            >
              Be stronger than your excuses+
            </Heading>
          </Link>{" "}
        </Box>
        <Heading pt={24} fontWeight="bold" textAlign="center" size="xl">
          Workouts
        </Heading>
        <Grid templateColumns="repeat(3, 1fr)" gap={6} mt={8}>
          <GridItem w="80%" margin="auto" height="100%">
            <SummarizeCard
              image={Exercise}
              title="Choose from 1000+ exercises"
              description="With Fitness you can find over 1000 different workouts and star the exercises you like the most."
            />
          </GridItem>
          <GridItem w="80%" margin="auto" height="100%">
            <SummarizeCard
              image={Filter}
              title="Filter"
              description="You can filter exercises for different body parts or equipment you have access to and much more!"
            />
          </GridItem>
          <GridItem w="80%" margin="auto" height="100%">
            <SummarizeCard
              image={Exercise}
              title="Create your own sessions"
              description="You can create your own workout sessions with different workouts to help you thorugh your journey"
            />
          </GridItem>
        </Grid>
        <Box margin="auto" textAlign="center">
          <Link to={"/exercise"}>
            <Button
              backgroundColor="#21D0B1"
              textColor="white"
              textDecoration="underline"
              mt={8}
            >
              Learn more
              <Icon as={MdArrowRightAlt} boxSize={4} mt={1} />
            </Button>
          </Link>
        </Box>
        <Heading pt={24} fontWeight="bold" textAlign="center" size="xl">
          Food and Health
        </Heading>
        <Grid templateColumns="repeat(3, 1fr)" gap={6} mt={8}>
          <GridItem w="80%" margin="auto" height="100%">
            <SummarizeCard
              image={Food}
              title="Daily calories"
              description="Set your daily calorie intake and get auto generated meal plans to reach your goals"
            />
          </GridItem>
          <GridItem w="80%" margin="auto" height="100%">
            <SummarizeCard
              image={Food}
              title="Nutrition facts"
              description="Find the nutrition facts of the food you are about to eat"
            />
          </GridItem>
          <GridItem w="80%" margin="auto" height="100%">
            <SummarizeCard
              image={Food}
              title="Create a meal plan"
              description="Create your own meal plan through out the day"
            />
          </GridItem>
        </Grid>
        <Box margin="auto" textAlign="center">
          <Link to="/food-and-health">
            <Button
              backgroundColor="#21D0B1"
              textColor="white"
              textDecoration="underline"
              mt={8}
            >
              Learn more
              <Icon as={MdArrowRightAlt} boxSize={4} mt={1} />
            </Button>
          </Link>
        </Box>
        <Box
          position="relative"
          textAlign="center"
          backgroundColor="white"
          w="fit-content"
          margin="auto"
          pt={8}
        >
          <Heading size="xl">Calculate your stats</Heading>
          <Text pt={2} pb={4}>
            You can calculate different something blah blah
          </Text>
          <Box w="fit-content" margin="auto">
            <BmiCalculator />
          </Box>
          <Link to="/calculators">
            <Button
              backgroundColor="#21D0B1"
              textColor="white"
              textDecoration="underline"
              mt={8}
              left={0}
            >
              Learn more
              <Icon as={MdArrowRightAlt} boxSize={4} mt={1} />
            </Button>
          </Link>
        </Box>
      </Container>
    </Box>
  );
};

export default LandingPage;
