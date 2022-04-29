import  {RecipeCardGrid} from "../recipeCardGrid/recipeCardGrid";
import SearchBar from "../recipeSearchBar/recipeSearchBar"
export function FoodPage(){
    return( <div className="mx-auto">
        <SearchBar />
        <RecipeCardGrid/>
        </div>
    )
}