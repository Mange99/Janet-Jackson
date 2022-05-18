import { Grid, GridItem } from "@chakra-ui/react";
import { ExerciseCard } from "../exerciseCard/exerciseCard";
import { ExerciseCardGridProps } from "../types";

export function ExerciseCardGrid({
  onClick,
  exercises,
}: ExerciseCardGridProps) {
  return (
    <Grid
      templateColumns={{
        sm: "repeat(1, 1fr)",
        lg: "repeat(2, 1fr)",
        xl: "repeat(3, 1fr)",
      }}
      rowGap={8}
      columnGap={[8, 4, 2]}
    >
      {exercises.map((exercise) => (
        <GridItem w={{ sm: "50%", lg: "80%" }}>
          <ExerciseCard onClick={onClick} exercise={exercise} />
        </GridItem>
      ))}
    </Grid>
  );
}
