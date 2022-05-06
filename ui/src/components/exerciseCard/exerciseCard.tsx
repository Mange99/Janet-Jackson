import React from "react";
import { Button, Card } from "react-bootstrap";
import InfoPanel from "../modalInfoPanel/infoPanel";
import { ExerciseProps } from "../types";

interface ExerciseCardProps {
  onClick: (e: ExerciseProps) => void;
  exercise: ExerciseProps;
}

export function ExerciseCard({ onClick, exercise }: ExerciseCardProps) {
  const [modalShow, setModalShow] = React.useState(false);

  const handleClick = () => {
    onClick(exercise);
  };

  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{exercise.name}</Card.Title>
          <Card.Text>{exercise.name}</Card.Text>
          <Button onClick={() => setModalShow(true)} variant="primary">
            More info
          </Button>
          <InfoPanel
            show={modalShow}
            onHide={() => setModalShow(false)}
            exercise={exercise}
          />
          <Button style={{ marginLeft: "4px" }} onClick={handleClick}>
            Add to session
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}
