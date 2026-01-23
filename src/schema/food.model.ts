import mongoose, { model, models, Schema } from "mongoose";

type Food = {
  food_name: string;
  food_description: string;
  food_price: string;
  back_drop_img: string;
  poster_img: string;
};

const SchemaFoods = new Schema(
  {
    food_id: { type: Schema.ObjectId, ref: "Food", require: true },
    food_name: { type: String, require: true },
    food_description: { type: String, require: true },
    food_price: { type: String, require: true },
    back_drop_img: { type: String, require: true },
    poster_img: { type: String, require: true },
  },
  { timestamps: true },
);
const FoodModel = models["Foods"] || model("Foods", SchemaFoods);
export default FoodModel;
