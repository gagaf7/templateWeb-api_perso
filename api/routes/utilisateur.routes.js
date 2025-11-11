module.exports = app => {
  const utilisateurController = require("../controllers/utilisateur.controllers.js");

  var router = require("express").Router();

  router.post("/", utilisateurController.create);
  router.get("/", utilisateurController.findAll);
  router.get("/:id", utilisateurController.findOne);
  router.put("/:id", utilisateurController.update);
  router.delete("/:id", utilisateurController.delete);
  router.post("/login", utilisateurController.login);
  router.post("/signup", utilisateurController.signup);

  app.use('/api/users', router);
};