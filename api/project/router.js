//  `/api/projects` router buraya

const express = require("express");
const ProjectsModel = require("./model");
const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const project = await ProjectsModel.getAll();
    res.status(200).json(project);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    if (!req.body.project.name) {
      res.status(400).json({ message: "eksik alan var" });
    } else {
      const newProject = await ProjectsModel.insert(req.body);
      res.status(200).json(newProject);
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
