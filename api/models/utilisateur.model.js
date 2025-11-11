module.exports = (sequelize, Sequelize) => {
  const Pollution = sequelize.define("pollution", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    nom: {
      type: Sequelize.STRING,
      allowNull: false
    },
    prenom: {
      type: Sequelize.STRING
    },
    login: {
      type: Sequelize.STRING
    },
    pass: {
      type: Sequelize.DATE
  }, {
  });

  return Pollution;
};