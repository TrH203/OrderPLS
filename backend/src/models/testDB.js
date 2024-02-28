// Test.js

const { DataTypes } = require('sequelize');
const db = require('./database.js'); // Assuming db.js contains your Sequelize instance
const testDB = () => {
    try {
        db.authenticate();
        console.log("Connect Database successfully");
    } catch (e) {
        console.log("No database");
    }
}

module.exports = testDB;
