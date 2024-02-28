
const db = require("../models/database");
// const Test = require("../models/test");
// const Demo = require("../models/demo");
const Users = require("../models/users");
const { query } = require("express");
const handleUserLogin = (req, res) => {

}

const handleUserRegister = async (req, res) => {
    // Create a new user
    const value = req.body;
    const user = await Users.create({
        'username': value.username,
        'password': value.password,
        'email': value.email,
        'firstName': value.firstName,
        'lastName': value.lastName,
    }, { fields: ['username', 'password', 'email', 'firstName', 'lastName'] });
    console.log("create user at id", user.id);
    return res.status(200).send({ errCode: 0, message: "Hello" });
}
// const showTable = async (req, res) => {
//     try {
//         await db.authenticate();
//         let res = await Demo.findAll();
//         console.log(res);
//     } catch (e) {
//         console.log(e);a
//     }
//     res.send("show table");
// }
// const showValue = async (req, res) => {
//     try {
//         let rs = await Users.findAll({ query: 'raw' });
//         return res.status(200).json(rs);
//     } catch (e) {
//         console.log(e);
//     }
// }
module.exports = {
    handleUserLogin,
    handleUserRegister,
    // showTable,
    // showValue,
}