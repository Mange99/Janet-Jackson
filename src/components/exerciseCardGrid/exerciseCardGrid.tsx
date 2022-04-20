import React from "react";
import { Row, Col } from "react-bootstrap";
import { ExerciseCard } from "../exerciseCard/exerciseCard";
import { ExerciseCardGridProps } from "../types";


export function ExerciseCardGrid(array: ExerciseCardGridProps) {
  return (
    <Row xs={1} md={2} lg={3} className="g-3">
      {array.exercises.map((exercise) => (
        <Col>
            {console.log(exercise)}

        <ExerciseCard
            exercise={exercise}
          />
        </Col>
      ))}
    </Row>
  );
}
