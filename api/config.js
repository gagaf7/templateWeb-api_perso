module.exports =  {
    ACCESS_TOKEN_SECRET : "EMMA123",
    BDD : {
    "host" :"dpg-d4ph5mili9vc739bn0bg-a.oregon-postgres.render.com",
    "port" : "5432",
    "user" : "pollutionbasev2_user",
    "password" : "Q6Ykmu2azx0YGSjz69zB6Ym5gdkoIpG7",
    "bdname" :"pollutionbasev2" 
    },
    // Propriétés pour Sequelize
    HOST: "dpg-d4ph5mili9vc739bn0bg-a.oregon-postgres.render.com",
    USER: "pollutionbasev2_user",
    PASSWORD: "Q6Ykmu2azx0YGSjz69zB6Ym5gdkoIpG7",
    DB: "pollutionbasev2",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
};

