import testConnection from "../config/testConnectDatabase.js";

let testDB = async (req, res) => {
    let rs = await testConnection();
    res.send(rs);
}

export default {
    testDB: testDB,
}