const router = require('express').Router();
const adminControllers = require("../controllers/adminControllers");
// You can require and use your routes here ;)
router.get('/', (req, res) => { res.send("HEllo") })
router.post('/api/login', adminControllers.handleUserLogin);
router.post('/api/register', adminControllers.handleUserRegister);
// router.get('/api/s', adminControllers.showValue);
module.exports = router;