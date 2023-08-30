import { Request, Response } from "express";
import { getConnection } from "@utils/mongoconnection";
import { convertResultToStudyPlan } from "@utils/converter";
import { StudyPlan } from "model/studyplans.model";

const getAllStudyPlans = async (req: Request, res: Response) => {
  try {
    const client = await getConnection();
    if (!client) {
      return res.status(500).send("Failed to connect to the database.");
    }

    const data = client.db("stamfordcenter").collection("study_plans").find({});
    const results = await data.toArray();
    const studyplans = results.map((r) => convertResultToStudyPlan(r));
    res.json(studyplans);
  } catch (error) {
    console.error(`getAllStudyPlans: ${error}`);
    res
      .status(500)
      .send("Something went wrong on our end. Please try again later.");
  }
};

const getStudyPlan = async (req: Request, res: Response) => {
  try {
    const client = await getConnection();
    if (!client) {
      return res.status(500).send("Failed to connect to the database.");
    }

    const data = await client
      .db("stamfordcenter")
      .collection("study_plans")
      .findOne({ fileKey: req.params.fileKey });

    if (!data) {
      return res.status(404).send("File not found.");
    }

    const studyplan = convertResultToStudyPlan(data);
    res.status(200).json(studyplan);
  } catch (error) {
    console.error(`getStudyPlan: ${error}`);
    res
      .status(500)
      .send("Something went wrong on our end. Please try again later.");
  }
};

const createNewStudyPlan = async (req: Request, res: Response) => {
  try {
    const client = await getConnection();
    if (!client) {
      return res.status(500).send("Failed to connect to the database.");
    }

    const requiredFields = [
      "fileKey",
      "major",
      "major_abbrv",
      "faculty",
      "language",
      "year",
    ];
    const missingFields = requiredFields.filter((field) => !req.body[field]);

    if (missingFields.length > 0) {
      return res
        .status(400)
        .send("Missing fields: " + missingFields.join(", "));
    }

    const studyplan: StudyPlan = {
      fileKey: req.body.fileKey,
      major: req.body.major,
      major_abbrv: req.body.major_abbrv,
      faculty: req.body.faculty,
      language: req.body.language,
      year: req.body.year,
    };

    const data = await client
      .db("stamfordcenter")
      .collection("study_plans")
      .insertOne(studyplan);

    res.status(201).json({
      id: data.insertedId,
      ...studyplan,
    });
  } catch (error) {
    console.error(`createNewStudyPlan: ${error}`);
    res
      .status(500)
      .send("Something went wrong on our end. Please try again later.");
  }
};

const deleteStudyPlan = async (req: Request, res: Response) => {
  try {
    const client = await getConnection();
    if (!client) {
      return res.status(500).send("Failed to connect to the database.");
    }

    const data = await client
      .db("stamfordcenter")
      .collection("study_plans")
      .deleteOne({ fileKey: req.params.fileKey });

    if (!data || data.deletedCount === 0) {
      return res.status(404).send("File not found.");
    }

    res.status(200).send("File deleted");
  } catch (error) {
    console.error(`deleteStudyPlan: ${error}`);
    res
      .status(500)
      .send("Something went wrong on our end. Please try again later.");
  }
};

export { getAllStudyPlans, getStudyPlan, createNewStudyPlan, deleteStudyPlan };
