import Favorite, { IFavorite } from "../model/favorite.model";
import { APILogger } from "../logger/api.logger";

class FavoriteService {
  private logger: APILogger;

  constructor() {
    this.logger = new APILogger();
  }

  async createFavorite(data: IFavorite) {
    try {
      const favorite = await Favorite.create(data);

      await favorite.save();
      return favorite;
    } catch (e) {
      this.logger.error("Failed to create favorite due to: " + e);
      throw new Error(e);
    }
  }

  async findFavoriteById(userId: string, exersiceId: string ) {
    return Favorite.findOne({
        userId: userId,
        exersiceId: exersiceId
    }).exec();
  }

 
}

export default new FavoriteService();
