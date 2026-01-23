// controllers/foods.ts
import { Request, Response } from "express";
import mongoose from "mongoose";
import foodCartModel from "../../schema/foodCart.model";
import FoodModel from "../../schema/food.model";

export const createFoodCart = async (req: Request, res: Response) => {
  try {
    const { user_id, food_id, quantity } = req.body;

    // 1️⃣ food_id шалгах
    if (!mongoose.Types.ObjectId.isValid(food_id)) {
      return res.status(400).json({ message: "Invalid food_id" });
    }

    // 2️⃣ Food collection-д байна уу?
    const food = await FoodModel.findById(food_id);
    if (!food) {
      return res.status(404).json({ message: "Food not found" });
    }

    // 3️⃣ Cart-д хадгалах
    const cartItem = await foodCartModel.create({
      user_id,
      food_id,
      quantity,
    });

    res.status(201).json({
      message: "Food added to cart successfully",
      data: cartItem,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
