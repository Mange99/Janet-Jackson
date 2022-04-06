import { Col, Row } from "react-bootstrap";
import { ExerciseCardGrid } from "../exerciseCardGrid/exerciseCardGrid";

export function ExercisePage() {
  return (
    <Row>
      <Col lg="3" sm="4">
        
      </Col>

      <Col lg="8" sm="8"><ExerciseCardGrid /></Col>
    </Row>
  );
}
