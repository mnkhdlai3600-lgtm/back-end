import mongoose, { model, models, Schema } from "mongoose";

type Food = {
  food_name: string;
  food_description: string;
  food_price: number;
  back_drop_img: string;
  poster_img: string;
};

const SchemaFoods = new Schema<Food>({
  food_name: { type: String, require: true },
  food_description: { type: String, require: true },
  food_price: { type: Number, require: true },
  back_drop_img: { type: String, require: true },
  poster_img: { type: String, require: true },
});
export const FoodModel = models["Foods"] || model("Foods", SchemaFoods);
