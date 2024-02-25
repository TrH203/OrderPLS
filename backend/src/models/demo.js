// Test.js

const { DataTypes } = require('sequelize');
const db = require('./database.js'); // Assuming db.js contains your Sequelize instance

const Demo = db.define('demos', {
    value: {
        type: DataTypes.STRING,
    }
});

module.exports = Demo;