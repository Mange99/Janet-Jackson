import { Props } from "framer-motion/types/types";
import React from "react";
import { Button, Card } from "react-bootstrap";
import ReactDOM from "react-dom";

export function ExerciseCard(props: Props) {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>{props.describtion}</Card.Text>
          <Button variant="primary">More info</Button>
        </Card.Body>
      </Card>
    </>
  );
}
