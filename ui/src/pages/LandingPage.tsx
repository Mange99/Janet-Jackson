import {
  Box,
  Container,
  Flex,
  Heading,
  Icon,
  Image,
  Text,
} from "@chakra-ui/react";
import { MutableRefObject, useRef } from "react";
import Hero from "./Hero";
import Exercise from "../res/images/excercise.png";
import Food from "../res/images/exampleFood.png";
import Filter from "../res/images/filter.png";
import Session from "../res/images/session.png";
import calculator from "../res/images/bmiCalc.png";
import { MdArrowRightAlt } from "react-icons/md";
import { Link } from "react-router-dom";
import SummarizeCard from "../components/summarizeCard";
import { Button } from "../components/button";

const LandingPage = () => {
  const scrollToNext = () => {
    workoutsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const workoutsRef =
    useRef<HTMLDivElement>() as MutableRefObject<HTMLDivElement>;

  return (
    <Box position="relative">
      <Hero scrollToNext={scrollToNext} />
      <Container maxW={{ base: "80%", md: "70%" }} ref={workoutsRef}>
        <Box w="fit-content" margin="auto">
          <Link to="/tips">
            <Heading
              pt={{ base: 16, sm: 24 }}
              pb={4}
              textAlign="center"
              fontSize={{ base: "2xl", sm: "5xl" }}
              bgGradient="linear-gradient(90deg, rgba(124,163,149,1) 0%, rgba(38,208,178,1) 11%, rgba(33,208,177,1) 49%, rgba(30,185,164,1) 77%, rgba(25,171,148,1) 100%)"
              bgClip="text"
            >
              Be stronger than your excuses+
            </Heading>
          </Link>{" "}
        </Box>
        <Heading
          pt={{ base: 16, md: 24 }}
          fontWeight="bold"
          textAlign="center"
          fontSize={{ base: "2xl", sm: "3xl" }}
        >
          Workouts
        </Heading>

        <Flex direction={{ base: "column", lg: "row" }} gap={6} mt={8}>
          <SummarizeCard
            image={Exercise}
            title="Choose from 1000+ exercises"
            description="With Fitness you can find over 1000 different workouts and star the exercises you like the most."
          />
          <SummarizeCard
            image={Filter}
            title="Filter"
            description="You can filter exercises for different body parts or equipment you have access to and much more!"
          />
          <SummarizeCard
            image={Session}
            title="Create your own sessions"
            description="You can create your own workout sessions with different workouts to help you thorugh your journey"
          />
        </Flex>

        <Box margin="auto" textAlign="center">
          <Link to={"/exercise"}>
            <Button textDecoration="underline" mt={8}>
              Learn more
              <Icon as={MdArrowRightAlt} boxSize={4} mt={1} />
            </Button>
          </Link>
        </Box>
        <Heading
          pt={{ base: 16, md: 24 }}
          fontWeight="bold"
          textAlign="center"
          fontSize={{ base: "2xl", sm: "3xl" }}
        >
          Food and Health
        </Heading>

        <Flex direction={{ base: "column", lg: "row" }} gap={6} mt={8}>
          <SummarizeCard
            image={Food}
            title="Daily calories"
            description="Set your daily calorie intake and get auto generated meal plans to reach your goals"
          />
          <SummarizeCard
            image={Food}
            title="Nutrition facts"
            description="Find the nutrition facts of the food you are about to eat"
          />
          <SummarizeCard
            image={Food}
            title="Create a meal plan"
            description="Create your own meal plan through out the day"
          />
        </Flex>

        <Box margin="auto" textAlign="center">
          <Link to="/food-and-health">
            <Button textDecoration="underline" mt={8}>
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
          <Heading fontSize={{ base: "2xl", sm: "3xl" }}>
            Calculate your stats
          </Heading>
          <Text pt={2} pb={4}>
            We provide multiple calculators for various purposes.
          </Text>
          <Box w="full" margin="auto">
            <Image src={calculator} w="full" alt="calc" />
          </Box>
          <Link to="/calculators">
            <Button textDecoration="underline" m={8} left={0}>
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
