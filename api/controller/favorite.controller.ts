import { Request, Response } from "express";
import FavoriteService from "../service/favorite.service";
import { APILogger } from "../logger/api.logger";
import { FavoriteDocument } from "../model/favorite.model";

export class FavoriteController {
  private logger: APILogger;

  constructor() {
    this.logger = new APILogger();
  }

  async deleteFavorite(req: Request, res: Response) {
    const userId = req.body.userId;
    const exersiceId = req.body.exersiceId;
    const exersiceProps = req.body.exersiceProps;

    try {
      await FavoriteService.deleteFavorite({
        userId,
        exersiceId,
        exersiceProps
      });
      const ret = {
        success: true,
        data: {
            userId : userId,
            exersiceId : exersiceId,
            exersiceProps : exersiceProps,
        },
        status: "Favorite delete",
      };
      this.logger.info("Favorite deleted succesfully: ", exersiceId);
      return ret;
    } catch (e) {
      this.logger.error("Controller capturing error: " + e);
      throw new Error("Error while creating session");
    }
  }

  async createFavorite(req: Request, res: Response) {
    try {
      const userId = req.body.userId;
      const exersiceId = req.body.exersiceId;
      const exersiceProps = req.body.exersiceProps;

      const favorite = await FavoriteService.findFavoriteById(userId, exersiceId);
      if (favorite) {
        //return a 202 if user already exist, with status
        const ret = {
          success: false,
          status: "Favorite already exists",
        };
        return ret;
      } else {
        try {
          await FavoriteService.createFavorite({
            userId,
            exersiceId,
            exersiceProps
          });
          const ret = {
            success: true,
            data: {
                userId : userId,
                exersiceId : exersiceId,
                exersiceProps : exersiceProps,
            },
            status: "Favorite created",
          };
          this.logger.info("Favorite created succesfully: ", exersiceId);
          return ret;
        } catch (e) {
          this.logger.error("Controller capturing error: " + e);
          throw new Error("Error while creating session");
        }
      }
    } catch (e) {
      throw new Error(e);
    }
  }


  async getUserFavorites(req: Request, res: Response) {
    try {
      const userId = req.body.userId;
      

      const favorites = await FavoriteService.getUserFavorites(userId);
      const ret = {
        success: true,
        data: {
            favorites : favorites,
        },
        status: "Favorites fetched",
      };
      
      console.log(favorites);
      this.logger.info("Favorites fetched succesfully: ", userId);
        return ret;
      
    } catch (e) {
      throw new Error(e);
    }

  }

}
