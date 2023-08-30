import express from "express";
import {
  getAllStudyPlans,
  createNewStudyPlan,
  getStudyPlan,
  deleteStudyPlan,
} from "@controllers/studyplans.controller";

const studyplanRouter = express.Router();

studyplanRouter.get("/", getAllStudyPlans);
studyplanRouter.get("/:fileKey", getStudyPlan);
studyplanRouter.post("/", createNewStudyPlan);
studyplanRouter.delete("/:fileKey", deleteStudyPlan);

export default studyplanRouter;
