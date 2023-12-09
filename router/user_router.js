const router = require('express').Router();
const UserController = require("../controller/user_controller");

router.post('/registration',UserController.register);

module.exports = router;