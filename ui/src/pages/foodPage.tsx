import { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { RecipeCard } from "../components/recipeCard/recipeCard";
import { RecipeCardGrid } from "../components/recipeCardGrid/recipeCardGrid";
import { recipeInterface } from "../components/recipeInterfaces";
import {RecipeService} from "../services/recipeService";

const getRecipes = async (recipe: string): Promise<recipeInterface[]> => {
  const service = new RecipeService();
  const res = await service.getRecipe(recipe);
  console.log(res);
  return res;
}


export function FoodPage() {

  const [recipeQuery, setRecipeQuery] = useState("meat");
  const [recipesArray, setRecipes] = useState<recipeInterface[]>([]);

  useEffect(() => {
    handleSubmit(recipeQuery);
  }, []);

 const handleSubmit = (recipe: string) => {
     try {
      getRecipes(recipe).then((data) => {
       console.log(data);
       setRecipes(data);
      });
     } catch (error) {
       console.log("error with setting recipes in foodPage, Error:: " + error);
     }
   
 }

  return (
    <>
      <div className="mb-3 mt-3 mr-5 d-flex flex-col">
          <Form>
            <Form.Group className="mb-3" controlId="formRecipe">
              <Form>
                <Row>
                  <Col>
                    <Form.Group controlId="recipe">
                      <Form.Control
                        style={{width: "12rem"}}
                        onChange={e => {setRecipeQuery(e.target.value)}}
                        type="text"
                        placeholder="Recipe..."
                      />
              
                    </Form.Group>
                  </Col>
                    
                </Row>
              </Form>
            </Form.Group>

          </Form>
          <Button className="mb-3 mr-10" onClick={() => handleSubmit(recipeQuery)} variant="primary">
            Search
          </Button>
      </div>

      <Row xs={1} md={2} lg={4} className="g-4">
      {recipesArray.map((e) => (
        <Col>
          <RecipeCard recipe={e.recipe} />
        </Col>
        ))
      }
    </Row>
    </>
  );
}
