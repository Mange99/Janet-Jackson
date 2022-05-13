import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { recipeInterface } from "../recipeInterfaces";
import { RecipeCard } from "../recipeCard/recipeCard";
import { RecipeService } from "../../services/recipeService";

interface recipeProps {
  recipesArray: recipeInterface[]
}

export function RecipeCardGrid ({recipesArray}: recipeProps) {
  console.log(recipesArray);
  const [recipes, setRecipes] = useState(recipesArray);
  console.log(recipes);
  /*
  useEffect(() => {
    setRecipes(recipesArray);
  }, []);

  */

  /*
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        APP_ID: "3e55957f",
        API_KEY: "154526ece32bedbe18ee7788fd6c7e8e",
      },
    };

    fetch(
      "https://api.edamam.com/api/recipes/v2?app_id=3e55957f&app_key=154526ece32bedbe18ee7788fd6c7e8e&type=public&q=meat",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setRecipes(response.hits);
        console.log(response.hits);
      })
      .catch((err) => console.error(err));
  }, []);
*/
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
