const router = require('express').Router();
const adminControllers = require("../controllers/adminControllers");
// You can require and use your routes here ;)
router.get('/', (req, res) => { res.send("HEllo") })
router.get('/api/login', adminControllers.handleUserLogin);
router.get('api/register', adminControllers.handleUserRegister);
router.get('/api/s', adminControllers.showTable);
module.exports = router;