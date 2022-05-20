import { Modal, CloseButton } from "react-bootstrap";
import { InfoPanelProps } from "../types";
import Image from "react-bootstrap/Image";
import { Text } from "@chakra-ui/react";
import { Button } from "../button";

const InfoPanel: React.FC<InfoPanelProps> = ({ show, onHide, exercise }) => {
  return (
    <Modal
      show={show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      onEscapeKeyDown={onHide}
      backdrop={true}
      onBackdropClick={onHide}
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          {exercise.name.charAt(0).toUpperCase()}
          {exercise.name.slice(1)}
        </Modal.Title>
        <CloseButton onClick={onHide} />
      </Modal.Header>
      <Modal.Title></Modal.Title>
      <Modal.Body>
        <Text fontSize={"xl"} fontWeight="medium">
          This exercise trains the {exercise.bodyPart}, more specific{" "}
          {exercise.target}.
        </Text>
        <Text>
          You need {exercise.equipment} to do this exercise. It is demonstrated
          here below in a gif.
        </Text>
        <Image src={exercise.gifUrl}></Image>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default InfoPanel;
