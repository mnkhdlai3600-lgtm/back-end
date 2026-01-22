import mongoose, { model, models, Schema } from "mongoose";

type User = {
  user_name: string;
  email: string;
  phone_number: number;
  user_age: number;
};

const UserSchema = new Schema<User>({
  user_name: { type: String, require: true },
  email: { type: String, require: true, unique: true },
  phone_number: { type: Number, require: true },
  user_age: { type: Number },
});
export const UserModel = models["Users"] || model("Users", UserSchema);
