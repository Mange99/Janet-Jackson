import { useEffect, useState } from "react";
import { Col, Dropdown, DropdownButton, Row } from "react-bootstrap";
import { recipeInterface } from "../recipeInterfaces";
import { RecipeCard } from "../recipeCard/recipeCard";

export function RecipeCardGrid() {
  const [recipes, setRecipes] = useState<recipeInterface[]>([]);
  const [filteredRecipes, setFilterRecipes] = useState<recipeInterface[]>([]);

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
    const options = {
      method: "GET",
      headers: {
        APP_ID: "3e55957f",
        API_KEY: "154526ece32bedbe18ee7788fd6c7e8e",
      },
    };

    fetch(
      "https://api.edamam.com/api/recipes/v2?app_id=3e55957f&app_key=154526ece32bedbe18ee7788fd6c7e8e&type=public&q=all",
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
    <div className="m-2">
      <Row xs={1} md={2} lg={4} className="g-4">
        <Col lg={2}>
          <DropdownButton id="dropdown-basic-button" title="Nutration ilter">
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

        <Col lg={10}>
          <Row>
            {filteredRecipes.map((e) => (
              <Col>
                <RecipeCard key={e.recipe.label} recipe={e.recipe} />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </div>
  );
}
