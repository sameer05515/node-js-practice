const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Word=sequelize.define('word',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      word: Sequelize.STRING,
      partOfSpeeches: Sequelize.STRING,
      description: Sequelize.STRING
});

module.exports=Word;