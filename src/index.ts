import "module-alias/register";
import express, { Request, Response } from "express";
import cors from "cors";
import studyplanRouter from "@routes/studyplans.route";
import dotenv from "dotenv";

dotenv.config();
const port = process.env.PORT;

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.use("/api/study_plans", studyplanRouter);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at port:${port}`);
});
