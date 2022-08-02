const express = require('express')
const UserController = require('../controller/UserController')
const router = express.Router()

router.post('/register', UserController.register)
router.post('/login', UserController.login)


router.get('/getAllUser', UserController.gettAllUser)
router.get('/:id', UserController.getUserById)
router.delete('/:id', UserController.deleteUserById)
router.put('/:id', UserController.updateUerById)

module.exports = router;

