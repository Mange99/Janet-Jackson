import { Col, Row } from "react-bootstrap";
import { ExerciseCardGrid } from "../exerciseCardGrid/exerciseCardGrid";
import { ExerciseProps } from "../types";

const exercises: ExerciseProps[] = [
  {
    name: "abs",
    bodyPart: "abs",
    equipment: "body weight",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0001.gif",
    id: "0001",
    target: "abs",
    bodyPartImg: "he"
  },
  {
    name: "abs",
    bodyPart: "abs",
    equipment: "body weight",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0001.gif",
    id: "0001",
    target: "abs",
    bodyPartImg: "he"
},
  {
    name: "abs",
    bodyPart: "abs",
    equipment: "body weight",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0001.gif",
    id: "0001",
    target: "abs",
    bodyPartImg: "he"
  }
];

export function ExercisePage() {
  return (
    <Row>
      <Col lg="3" sm="4">
      </Col>
      <Col lg="8" sm="8"><ExerciseCardGrid exercises={exercises}/></Col>
    </Row>
  );
}
