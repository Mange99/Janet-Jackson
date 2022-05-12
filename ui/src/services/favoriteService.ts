import axios from "axios";
import { FavoriteProps } from "../components/types";

export class FavoriteService {
 

  public async getUserFavorites(userId: String): Promise<any> {

    try {
        const data = JSON.stringify({
          userId: userId,
        });
  
        
  
        const config = {
          method: "post",
          url: "http://localhost:3080/api/favorite/getUserFavorites",
          headers: {
            "Content-Type": "application/json",
          },
          data: data,
        };
  
        return await axios(config);
      } catch (error) {
        console.log("Error with getting user favorites: " + error);
      }

      }

  public async createFavorite(favorite: FavoriteProps): Promise<any> {
    try {
      const data = JSON.stringify({
        userId: favorite.userId,
        exersiceId: favorite.exersiceId,
        exersiceProps: favorite.exersiceProps
      });

      console.log(data);

      const config = {
        method: "post",
        url: "http://localhost:3080/api/favorite/create",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      return await axios(config);
    } catch (error) {
      console.log("Error with create session: " + error);
    }
  }

  public async deleteFavorite(favorite: FavoriteProps): Promise<any> {
    try {
      const data = JSON.stringify({
        userId: favorite.userId,
        exersiceId: favorite.exersiceId,
        exersiceProps: favorite.exersiceProps
      });

      

      const config = {
        method: "post",
        url: "http://localhost:3080/api/favorite/delete",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      return await axios(config);
    } catch (error) {
      console.log("Error with create session: " + error);
    }
  }

}
