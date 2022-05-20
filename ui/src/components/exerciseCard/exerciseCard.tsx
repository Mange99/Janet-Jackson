import { Box, Flex, Heading, Icon, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import InfoPanel from "../modalInfoPanel/infoPanel";
import { ExerciseProps } from "../types";
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from "react-icons/md";
import { Button } from "../button";

interface ExerciseCardProps {
  onClick?: (e: ExerciseProps) => void;
  exercise: ExerciseProps;
}

export function ExerciseCard({ onClick, exercise }: ExerciseCardProps) {
  const [modalShow, setModalShow] = React.useState(false);
  const [like, setLike] = useState(false);

  const handleClick = () => {
    if (onClick != undefined) onClick(exercise);
  };

  return (
    <Box
      maxW="18rem"
      border="2px"
      borderRadius={5}
      borderColor="black"
      boxShadow={"lg"}
      p="4"
    >
      <Flex>
        <Heading as="ins" size="md" fontStyle="italic" w="90%">
          {exercise.name.charAt(0).toUpperCase()}
          {exercise.name.slice(1)}
        </Heading>
        <Icon
          mt={1}
          boxSize={6}
          _hover={{ cursor: "pointer" }}
          as={like ? MdOutlineFavorite : MdOutlineFavoriteBorder}
          onClick={() => {
            setLike((prev) => !prev);
          }}
        />
      </Flex>
      <Text mt={1}>
        {exercise.bodyPart.charAt(0).toUpperCase()}
        {exercise.bodyPart.slice(1)}, ({exercise.target.charAt(0).toUpperCase()}
        {exercise.target.slice(1)})
      </Text>

      <InfoPanel
        show={modalShow}
        onHide={() => setModalShow(false)}
        exercise={exercise}
      />
      <Flex gap={2} mt={4}>
        <Button onClick={() => setModalShow(true)}>More info</Button>

        {onClick != undefined && (
          <Button style={{ marginLeft: "4px" }} onClick={handleClick}>
            Add to session
          </Button>
        )}
      </Flex>
    </Box>
  );
}
