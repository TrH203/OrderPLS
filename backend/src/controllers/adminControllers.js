
const db = require("../models/database");
// const Test = require("../models/test");
// const Demo = require("../models/demo");
const Users = require("../models/users");
const jwt = require("jsonwebtoken");
const secretKey = process.env.SECRET;
const handleUserLogin = async (req, res) => {
    try {
        const value = req.body;
        const rs = await Users.findOne({ where: { username: value.username, password: value.password } });
        if (rs) {
            const token = jwt.sign({ username: value.username, password: value.password }, secretKey, { expiresIn: '1h' });
            return res.status(200).send({ errCode: 200, message: "find one", token: token });
        } else {
            return res.status(200).send({ errCode: 304, message: "not found" });
        }
    }
    catch (e) {
        console.log(e);
        return res.status(200).send({ errCode: 304, message: "not found" });
    }

}

const handleUserRegister = async (req, res) => {
    // Create a new user
    const value = req.body;
    // console.log(value);
    // console.log(db);
    const query = `
    INSERT INTO Users(id, username, email, firstName, lastName, password)
    VALUES (DEFAULT, 
            '${value.username}', 
            '${value.email}', 
            '${value.firstName}', 
            '${value.lastName}', 
            '${value.password}');
    `;

    try {
        const [results, metadata] = await db.query(query);
        if (results) {
            console.log('create ok');
            setTimeout(() => { return res.status(200).send({ errCode: 201, message: "User is created" }); }, 1000);
        }
        else {
            console.log('no result');
            return res.status(200).send({ errCode: 409, message: "User is not created" });
        }
    } catch (e) {

    }
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