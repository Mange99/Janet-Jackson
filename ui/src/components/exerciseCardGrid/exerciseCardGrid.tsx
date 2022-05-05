import { Grid, GridItem } from "@chakra-ui/react";
import { ExerciseCard } from "../exerciseCard/exerciseCard";
import { ExerciseCardGridProps } from "../types";

export function ExerciseCardGrid({
  onClick,
  exercises,
}: ExerciseCardGridProps) {
  return (
    <Grid templateColumns="repeat(3, 1fr)" rowGap={8} columnGap={8}>
      {exercises.map((exercise) => (
        <GridItem w="100%">
          <ExerciseCard onClick={onClick} exercise={exercise} />
        </GridItem>
      ))}
    </Grid>
  );
}
