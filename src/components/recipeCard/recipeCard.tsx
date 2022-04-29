import React from "react";
import { Button, Card } from "react-bootstrap";
import {recipe} from "../recipeInterfaces"
import ReactDOM from "react-dom";




export function ExerciseCard() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>..</Card.Title>
          <Card.Text>..</Card.Text>
          <Button onClick={() => setModalShow(true)} variant="primary">
            More info
          </Button>
    
        </Card.Body>
      </Card>
    </>
  );
}
