import { useEffect, useState } from "react";
import {
  Button,
  Col,
  Dropdown,
  DropdownButton,
  Form,
  Row,
  Spinner,
} from "react-bootstrap";
import { RecipeCard } from "../components/recipeCard/recipeCard";
import { recipeInterface } from "../components/recipeInterfaces";
import { RecipeService } from "../services/recipeService";

const getRecipes = async (recipe: string): Promise<recipeInterface[]> => {
  const service = new RecipeService();
  const res = await service.getRecipe(recipe);
  console.log(res);
  return res;
};

export function FoodPage() {
  const [recipeQuery, setRecipeQuery] = useState("meat");
  const [recipes, setRecipes] = useState<recipeInterface[]>([]);
  const [filteredRecipes, setFilterRecipes] = useState<recipeInterface[]>([]);
  const [loading, setLoading] = useState(true);

  const specificRecipeLabels = (recipeLabel: string) => {
    if (recipeLabel == "None") {
      setFilterRecipes(recipes);
    } else {
      setFilterRecipes(
        recipes.filter((recipe) =>
          recipe.recipe.healthLabels.includes(recipeLabel)
        )
      );
    }
  };

  const filterHealth = () => {
    let filterItems: string[] = [];

    recipes.map((rec) => {
      rec.recipe.healthLabels.map((label) => {
        if (!filterItems.includes(label)) {
          filterItems.push(label);
        }
      });
    });
    filterItems.push("None");
    return filterItems;
  };

  useEffect(() => {
    handleSubmit(recipeQuery);
  }, []);

  const handleSubmit = (recipe: string) => {
    try {
      setLoading(true);
      getRecipes(recipe).then((data) => {
        setRecipes(data);
        setFilterRecipes(data);
        setLoading(false);
      });
    } catch (error) {
      setLoading(true);
      console.log("error with setting recipes in foodPage, Error:: " + error);
    }
  };

  return (
    <div className="vh-100">
      <div>
        <Row>
          <Col className="m-2">
       
            <DropdownButton id="dropdown-basic-button" title="Nutration Filter">
              {filterHealth().map((item) => {
                return (
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={(e) => {
                      specificRecipeLabels(item);
                    }}
                  >
                    {item}
                  </Dropdown.Item>
                );
              })}
            </DropdownButton>
          </Col>

          <Col lg={6} md={6}   className={"d-flex  m-2" }>
            <Form>
              <Form.Group controlId="recipe" >
                <Form.Control
                  style={{ width: "12rem" }}
                  onChange={(e) => {
                    setRecipeQuery(e.target.value);
                  }}
                  type="text"
                  placeholder="Recipe..."
                />
              </Form.Group>
            </Form>

            <Button
            className="ms-2"
              onClick={() => handleSubmit(recipeQuery)}
              variant="primary"
            >
              Search
            </Button>
          </Col>
        </Row>
      </div>
      
      {!loading ?
      <Row>
        {filteredRecipes.map((e) => (
          <Col>
            <RecipeCard recipe={e.recipe} />
          </Col>
        ))}
      </Row>
      :
      <div className="position-absolute top-50 start-50 translate-middle">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
      }
    </div>
  );
}
