import { Request, Response } from "express";
import { FoodModel } from "../../models";

export const createNewFood = async (req: Request, res: Response) => {
  try {
    await FoodModel.create();
  } catch (error) {
    console.error(error);
  }
};
