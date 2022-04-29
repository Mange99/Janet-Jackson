import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
//import { sendApiRequest } from "../../recipeApiHandler/recipeApiHandler";
import { recipe } from "../recipeInterfaces";

export function RecipeCardGrid() {
  const [recipes, setRecipes] = useState<recipe[]>([]);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        APP_ID: "3e55957f",
        API_KEY: "154526ece32bedbe18ee7788fd6c7e8e",
      },
    };

    fetch(
      "https://api.edamam.com/api/recipes/v2?app_id=3e55957f&app_key=154526ece32bedbe18ee7788fd6c7e8e&type=public&q=pizza",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setRecipes(response.hits);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <Row xs={1} md={3} lg={5}>
        {recipes.map((e) => {
          console.log(e);
        })}
      </Row>
    </div>
  );
}
