module.exports = app => {
  const pollutionController = require("../controllers/pollution.controllers.js");

  var router = require("express").Router();

  router.post("/", pollutionController.create);
  router.get("/", pollutionController.findAll);
  router.get("/:id", pollutionController.findOne);
  router.put("/:id", pollutionController.update);
  router.delete("/:id", pollutionController.delete);
  router.delete("/", pollutionController.deleteAll);

  app.use('/api/pollutions', router);
};