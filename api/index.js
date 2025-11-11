module.exports = app => {
  require("./pollution.routes.js")(app);
  require("./utilisateur.routes.js")(app);
};