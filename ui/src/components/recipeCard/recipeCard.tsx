import React from "react";
import { Card } from "react-bootstrap";
import { recipeInterface } from "../recipeInterfaces";

export function RecipeCard(Props: recipeInterface) {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={Props.recipe.image} />
        <Card.Body>
          <Card.Title>{Props.recipe.label}</Card.Title>
          <Card.Text>
            Calories: {Math.round(Props.recipe.calories)}
            <br />
            Cuisine: {Props.recipe.cuisineType[0]}
            <br />
            Protien: {Math.round(Props.recipe.digest[2].total)}
          </Card.Text>

          <Card.Footer>
            <small className="text-muted">
              {Props.recipe.healthLabels.map((e) => e + " ,")}{" "}
            </small>
          </Card.Footer>
        </Card.Body>
      </Card>
    </>
  );
}
