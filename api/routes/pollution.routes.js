module.exports = app => {
    const pollutionController = require("../controllers/pollution.controllers.js");
  
    var router = require("express").Router();
  
    router.get("/", pollutionController.get);
    router.post("/", pollutionController.create);
    router.get("/:id", pollutionController.getById);
    router.put("/:id", pollutionController.update);
    router.delete("/:id", pollutionController.delete);
  
    app.use('/api/pollutions', router);
};
