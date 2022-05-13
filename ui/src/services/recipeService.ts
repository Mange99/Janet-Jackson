import axios from "axios";
import { recipes } from "../components/recipeInterfaces";

export class RecipeService {

    public async getRecipe(recipe: string) {
        

        /**
         *  const options = {
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
         * 
         */

        try {
            const config = {
                method: "get",
                url: "https://api.edamam.com/api/recipes/v2",
                params: {
                    app_id: "3e55957f",
                    app_key: "154526ece32bedbe18ee7788fd6c7e8e",
                    type: "public",
                    q: recipe,
                },
                headers: {},
              };
        
              const ret = await axios(config);
              console.log("aklsjdkalsjd");
              console.log(ret.data.hits);
              return ret.data.hits;

        } catch(e: any) {
            console.log("Error with recipe service:: " + e);
            throw new Error(e); 
        }
    }
    


}


