import express from "express";
import Project from "../models/Project.js";  // ✅ fixed

const router = express.Router();

// ✅ Get all projects
router.get("/", async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ Add a project
router.post("/", async (req, res) => {
  try {
    const newProject = new Project(req.body);
    await newProject.save();
    res.json(newProject);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

export default router;