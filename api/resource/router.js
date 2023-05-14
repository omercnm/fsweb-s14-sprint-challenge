// `/api/resources` router buraya

const express = require("express");
const router = express.Router();
const ResourceModel = require("./model");
const mw = require("./middleware");

router.get("/", async (req, res, next) => {
  try {
    const resourse = await ResourceModel.getAll();
    res.json(resourse);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const newResource = await ResourceModel.insert(req.body);
    res.status(200).json(newResource);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
