import { recipe } from "../components/recipeInterfaces";

export async function sendApiRequest() {
  let APP_ID = "3e55957f";
  let API_KEY = "154526ece32bedbe18ee7788fd6c7e8e";

  let response = await fetch(
    "https://api.edamam.com/api/recipes/v2?app_id=3e55957f&app_key=154526ece32bedbe18ee7788fd6c7e8e&type=public&q=pizza"
  );
  let data = await response.json();
  let recipes: recipe = data.hits;
  return recipes;
}
