
import {Modal, Button} from "react-bootstrap";
import {ExerciseProps, InfoPanelProps} from "../types";
import Image from "react-bootstrap/Image"

const InfoPanel: React.FC<InfoPanelProps> = ({show, onHide, exercise}) => {
    return (
      <Modal
        show = {show}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {exercise.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </p>
          <Image src="http://d205bpvrqc9yn1.cloudfront.net/0001.gif"></Image>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

export default InfoPanel;