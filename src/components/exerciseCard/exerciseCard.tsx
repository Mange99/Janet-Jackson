import { Props } from "framer-motion/types/types";
import React from "react";
import { Button, Card } from "react-bootstrap";
import InfoPanel from "../modalInfoPanel/infoPanel"
import ReactDOM from "react-dom";
import { ExerciseProps } from "../types";

export function ExerciseCard(props: ExerciseProps) {

  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>{props.name}</Card.Text>
          <Button onClick={() => setModalShow(true)} variant="primary">More info</Button>
          <InfoPanel show = {modalShow} onHide = {() => setModalShow(false)} exercise = {props}  />
        </Card.Body>
      </Card>
    </>
  );
}
