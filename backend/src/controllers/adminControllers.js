const db = require("../models/database");
const Test = require("../models/test");
const Demo = require("../models/demo");
const Users = require("../models/users");
const { query } = require("express");
const handleUserLogin = (req, res) => {
    res.send("hello login")
}

const handleUserRegister = (req, res) => {
    res.send("hello resgister");
}
const showTable = async (req, res) => {
    try {
        await db.authenticate();
        let res = await Demo.findAll();
        console.log(res);
    } catch (e) {
        console.log(e);
    }
    res.send("show table");
}
const showValue = async (req, res) => {
    try {
        let rs = await Users.findAll({ query: 'raw' });
        return res.status(200).json(rs);
    } catch (e) {
        console.log(e);
    }
}
module.exports = {
    handleUserLogin,
    handleUserRegister,
    showTable,
    showValue,
}