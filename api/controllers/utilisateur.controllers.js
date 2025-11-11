const db = require("../models");
const Utilisateur = db.utilisateur;

// Get all Utilisateurs
exports.get = (req, res) => {
  Utilisateur.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving utilisateurs."
      });
    });
};

// Sign Up - Create a new Utilisateur
exports.signup = (req, res) => {
  if (!req.body.email || !req.body.password || !req.body.username) {
    res.status(400).send({
      message: "Email, password and username are required!"
    });
    return;
  }

  const utilisateur = {
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  };

  Utilisateur.create(utilisateur)
    .then(data => {
      res.send({
        message: "Utilisateur created successfully!",
        utilisateur: data
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the utilisateur."
      });
    });
};

// Login
exports.login = (req, res) => {
  if (!req.body.email || !req.body.password) {
    res.status(400).send({
      message: "Email and password are required!"
    });
    return;
  }

  Utilisateur.findOne({
    where: {
      email: req.body.email
    }
  })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: "Utilisateur not found!"
        });
      } else if (data.password !== req.body.password) {
        res.status(401).send({
          message: "Invalid password!"
        });
      } else {
        res.send({
          message: "Login successful!",
          utilisateur: {
            id: data.id,
            username: data.username,
            email: data.email
          }
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while logging in."
      });
    });
};