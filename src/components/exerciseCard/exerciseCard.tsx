import React from "react";
import { Button, Card } from "react-bootstrap";
import InfoPanel from "../modalInfoPanel/infoPanel";
import { ExerciseProps } from "../types";

interface ExerciseCardProps {
  exercise: ExerciseProps;
}

export function ExerciseCard(exercises: ExerciseCardProps) {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{exercises.exercise.name}</Card.Title>
          <Card.Text>{exercises.exercise.name}</Card.Text>
          <Button onClick={() => setModalShow(true)} variant="primary">
            More info
          </Button>
          <InfoPanel
            show={modalShow}
            onHide={() => setModalShow(false)}
            exercise={exercises.exercise}
          />
        </Card.Body>
      </Card>
    </>
  );
}
