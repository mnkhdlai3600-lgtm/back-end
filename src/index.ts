import cors from "cors";
import { configDotenv } from "dotenv";
import express, { Application, Request, response, Response } from "express";
import { idText } from "typescript";

configDotenv();

const app: Application = express();
const port = 8000;

app.use(cors());
app.use(express.json());

// const user = {
//   name: "MnkhDlai",
//   email: "mnkhdlai3600@gmail.com",
//   password: "12345678",
// };

// app.post("/post", async (req: Request, res: Response) => {
//   res.status(200).send([req.body]);
// });

// app.put("/put", async (req: Request, res: Response) => {
//   const updatedUser = {
//     ...user,
//     ...req.body,
//   };

//   res.status(200).json(updatedUser);
// });
// app.get("get", async (req: Request, res: Response) => {
//   res.status(200).send(req.body);
// });

// app.delete("/delete", async (req: Request, res: Response) => {
//   res.status(200).send("Deleted");
// });

// id search

// app.get("/getById", async (req: Request, res: Response) => {
//   const users = [
//     {
//       id: 1,
//       name: "Dlai",
//       email: "mnkhdlai3600@gmail.com",
//       number: "86698778",
//     },
//     {
//       id: 2,
//       name: "Namuna",
//       email: "nazu0321@gmail.com",
//       number: "88444343",
//     },
//     {
//       id: 3,
//       name: "Enhdlai",
//       email: "enkhlai1225@gmail.com",
//       number: "89868779",
//     },
//     {
//       id: 4,
//       name: "idk",
//       email: "idk2021@gmail.com",
//       number: "90909090",
//     },
//   ];

//   const idSearch = Number(req.query.id);
//   const search = users.find((person) => person.id === idSearch);
//   console.log(idSearch);
//   if (search) {
//     return res.status(200).send({ message: "success", data: search });
//   } else if (!search) {
//     return res.status(404).send({ message: "Bdgue" });
//   }
// });

// write task create api // post request

type User = {
  id: number;
  title: string;
  description: string;
  completed: boolean;
};

const users: User[] = [];
const usersData = app.post("/new-user", (req: Request, res: Response) => {
  const userData = req.body;

  const newUser: User = {
    id: Date.now(),
    title: userData.title,
    description: userData.description,
    completed: userData.completed,
  };
  users.push(newUser);

  res.status(201).json({
    message: "Amjilttai nemegdlee",
    data: users,
  });
  return users;
});

// write task update api // put request
console.log(usersData);

app.put("/uptadelist", (req: Request, res: Response) => {});

app.listen(port, () => console.log("http://localhost:8000"));
