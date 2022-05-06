import { Grid, GridItem } from "@chakra-ui/react";
import { ExercisePage } from "../../pages/exercisePage";
import { ExerciseCard } from "../exerciseCard/exerciseCard";
import { ExerciseCardGridProps } from "../types";

export function ExerciseCardGrid(array: ExerciseCardGridProps) {

  return (
    <Grid templateColumns="repeat(3, 1fr)" rowGap={8} columnGap={8}>
      {array.exercises.map((exercise) => (
        <GridItem w="100%">
          <ExerciseCard exercise={exercise} />
        </GridItem>
      ))}
    </Grid>
  );
}
