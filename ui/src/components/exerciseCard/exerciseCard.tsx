import React from "react";
import { Button, Card, ToggleButton} from "react-bootstrap";
import InfoPanel from "../modalInfoPanel/infoPanel";
import { ExerciseProps ,FavoriteProps} from "../types";
import { FavoriteService } from "../../services/favoriteService";

interface ExerciseCardProps {
  onClick: (e: ExerciseProps) => void;
  exercise: ExerciseProps;
  checkIfFavorite: boolean;
}

async function sendFavorite(data: FavoriteProps) {
  const favoriteService = new FavoriteService();
  return await favoriteService.createFavorite(data);
}

async function deleteFavorite(data: FavoriteProps) {
  const favoriteService = new FavoriteService();
  return await favoriteService.deleteFavorite(data);
}

export function ExerciseCard({ onClick, exercise, checkIfFavorite }: ExerciseCardProps) {
  const [modalShow, setModalShow] = React.useState(false);
  const [checked, setChecked] = React.useState(false);
  const [favorite, setFavorite] = React.useState<FavoriteProps>({
    userId: '123',
    exersiceId: exercise.id,
    exersiceProps: exercise
  });

  
  const handleClick = () => {
    onClick(exercise);
  };

  const handleFavorite = () => {

    if(!checked){
    sendFavorite(favorite).then((data) => {
      if (data.data.success === true) {
        console.log("all good");
      } else if (
        data.data.success === false &&
        data.data.status === "Session already exists"
      ) {
        console.log("all bad");
      }
    });
  }else{
    deleteFavorite(favorite).then((data) => {
      if (data.data.success === true) {
        console.log("all good");
      } else if (
        data.data.success === false
      ) {
        console.log("all bad");
      }
    });
  }
    setChecked(!checked);
  }

  React.useEffect(() => {
    setChecked(checkIfFavorite);
  }, [exercise])



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
          
          <ToggleButton
          className="mb-2"

          id={exercise.id}
          type="checkbox"
          variant="outline-danger"
          checked={checked} 
          value={exercise.name}
          onChange={() => handleFavorite()}
        
      >
        Favorite
      </ToggleButton>
      
        </Card.Body>
      </Card>
    </>
  );
}
