import React from "react";
import { Row, Col } from "react-bootstrap";
import { ExerciseCard } from "../exerciseCard/exerciseCard";

const exercises = [
  {
    name: "Exercise1",
    describtion:
      "lerom pesos bla bla blabla bla lbblbal bla bla bla bla blabla",
  },
  {
    name: "Exercise2",
    describtion:
      "lerom pesos bla bla blabla bla lbblbal bla bla bla bla blabla",
  },
  {
    name: "Exercise3",
    describtion:
      "lerom pesos bla bla blabla bla lbblbal bla bla bla bla blabla",
  },
];

export function ExerciseCardGrid() {
  return (
    <Row xs={1} md={2} lg={3} className="g-3">
      {exercises.map((exercise) => (
        <Col>
          <ExerciseCard
            name={exercise.name}
            describtion={exercise.describtion}
          />
        </Col>
      ))}
    </Row>
  );
}
