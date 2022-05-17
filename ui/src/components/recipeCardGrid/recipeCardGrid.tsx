import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { recipeInterface } from "../recipeInterfaces";
import { RecipeCard } from "../recipeCard/recipeCard";

interface recipeProps {
  recipesArray: recipeInterface[]
}

export function RecipeCardGrid ({recipesArray}: recipeProps) {
  console.log(recipesArray);
  const [recipes, setRecipes] = useState(recipesArray);
  console.log(recipes);

  return (
    <Row xs={1} md={2} lg={4} className="g-4">
      {recipesArray.map((e) => (
        <Col>
          <RecipeCard recipe={e.recipe} />
        </Col>
      ))}
    </Row>
  );
}
