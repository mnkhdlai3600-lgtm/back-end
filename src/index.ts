import cors from "cors";
import { configDotenv } from "dotenv";
import express, { Application, Request, Response } from "express";
import { connectToMongoDB } from "./mongoDB";
import { UserModel } from "./models/user.model";
import mongoose from "mongoose";

configDotenv();

const app: Application = express();
const port = 8000;

app.use(cors());
app.use(express.json());

app.post("/create-user", async (req: Request, res: Response) => {
  const { name, email } = req.body;
  const user = await UserModel.create({ name, email });
  res.status(200).send({ messege: "Success", data: user });
});

app.put("/api/users/:id", async (req, res) => {
  try {
    const id = req.params.id.trim();
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "ID формат буруу" });
    }
    const { name, email } = req.body;
    const user = await UserModel.findById(id);
    if (!user) {
      return res.status(404).json({ message: "Хэрэглэгч олдсонгүй" });
    }
    if (name !== undefined) user.name = name;
    if (email !== undefined) user.email = email;
    await user.save();
    res.json(user);
  } catch (err) {
    console.error("UPDATE ERROR", err);
    res.status(500).json({ message: "User update хийхэд алдаа гарлаа" });
  }
});

app.get("/api/users/:id", async (req, res) => {
  try {
    const id = req.params.id.trim();
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "ID формат буруу" });
    }
    const user = await UserModel.findById(id);
    if (!user) {
      return res.status(404).json({ message: "Хэрэглэгч олдсонгүй" });
    }
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: "User мэдээлэл авахад алдаа гарлаа" });
  }
});

const startServer = async () => {
  try {
    await connectToMongoDB();
    console.log("MongoDB connected");

    app.listen(port, () => {
      console.log(`server is running on port ${port}`);
    });
  } catch (err) {
    console.error("Server start error ", err);
    process.exit(1);
  }
};

startServer();
