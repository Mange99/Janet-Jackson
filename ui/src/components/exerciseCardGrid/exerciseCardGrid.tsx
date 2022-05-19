import { Grid, GridItem } from "@chakra-ui/react";
import { ExerciseCard } from "../exerciseCard/exerciseCard";
import { ExerciseCardGridProps, ExerciseProps } from "../types";

export function ExerciseCardGrid({
  onClick,
  exercises,
  favorites
}: ExerciseCardGridProps) {
  const checkIfFavorite = (exercise:ExerciseProps)  => {
    var cc = favorites.map((e) => {return e.id}).includes(exercise.id);
    
    return cc
    }
  
  return (
    <Grid templateColumns="repeat(3, 1fr)" rowGap={8} columnGap={8}>
      {exercises.map((exercise) => (
        <GridItem w="100%">
          <ExerciseCard onClick={onClick} exercise={exercise} checkIfFavorite={checkIfFavorite(exercise)} />
        </GridItem>
      ))}
    </Grid>
  );
}
