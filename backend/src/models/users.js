// Test.js

const { DataTypes } = require('sequelize');
const db = require('./database.js'); // Assuming db.js contains your Sequelize instance

const Users = db.define('Users', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    username: {
        type: DataTypes.INTEGER,
    },
    firstName: {
        type: DataTypes.STRING
    },
    lastName: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.INTEGER,
    }, password: {
        type: DataTypes.INTEGER,
    },
});

module.exports = Users;