const db = require("../models");
const Utilisateur = db.utilisateur;

// Create a new Utilisateur
exports.create = (req, res) => {
  if (!req.body.username || !req.body.email) {
    res.status(400).send({
      message: "Username and email are required!"
    });
    return;
  }

  Utilisateur.create(utilisateur)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the utilisateur."
      });
    });
};

// Retrieve all Utilisateurs
exports.findAll = (req, res) => {
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

// Find a single Utilisateur with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Utilisateur.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Utilisateur with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Utilisateur with id=" + id
      });
    });
};

// Update a Utilisateur by the id
exports.update = (req, res) => {
  const id = req.params.id;

  Utilisateur.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Utilisateur was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Utilisateur with id=${id}. Maybe Utilisateur was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Utilisateur with id=" + id
      });
    });
};

// Delete a Utilisateur with the specified id
exports.delete = (req, res) => {
  const id = req.params.id;

  Utilisateur.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Utilisateur was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Utilisateur with id=${id}. Maybe Utilisateur was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Utilisateur with id=" + id
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

// Signup
exports.signup = (req, res) => {
  if (!req.body.username || !req.body.email || !req.body.password) {
    res.status(400).send({
      message: "Username, email and password are required!"
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
        utilisateur: {
          id: data.id,
          username: data.username,
          email: data.email
        }
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the utilisateur."
      });
    });
};