const express = require('express')
const router = express.Router()
const User = require('../controllers/users.controllers')

router.get('/api/users', User.index)
router.get('/api/users.detail', User.details)
router.get('/api/users.email', User.email)


router.post('/api/users', User.create )


module.exports = router 