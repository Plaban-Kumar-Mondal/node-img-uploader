const express = require("express");
const router = express.Router();
const upload = require("../imageUploadSetup");

router.get("/", (req, res) => {
  res.render("index");
});

router.post("/upload", (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      res.render("index", {
        msg: err,
      });
    } else {
      if (req.file == undefined) {
        res.render("index", {
          msg: "Error: No File Selected",
        });
      } else {
        res.render("index", {
          msg: "File Uploaded",
          file: `uploads/${req.file.filename}`,
        });
      }
    }
  });
});

module.exports = router;
