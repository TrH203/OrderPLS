// Test.js

const { DataTypes } = require('sequelize');
const db = require('./database.js'); // Assuming db.js contains your Sequelize instance

const Test = db.define('test', {
    a: {
        type: DataTypes.STRING,
    },
    b: {
        type: DataTypes.STRING,

    },
    c: {
        type: DataTypes.STRING,

    },
    d: {
        type: DataTypes.STRING,
    }
});

module.exports = Test;
