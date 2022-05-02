import { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
//import { sendApiRequest } from "../../recipeApiHandler/recipeApiHandler";
import { recipeInterface } from "../recipeInterfaces";
import { RecipeCard } from "../recipeCard/recipeCard";

export  function RecipeCardGrid() {
  const [recipes, setRecipes] = useState<recipeInterface[]>([]);

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

  return (


    <Row xs={1} md={2} lg={4} className="g-4">
  {recipes.map((e) => (
    <Col>
     <RecipeCard recipe={e.recipe}/>
    </Col>
  ))}
</Row> 

  );
}




