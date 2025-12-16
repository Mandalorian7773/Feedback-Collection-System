const express = require('express')
const { createFeedback, getAdminFeedback } = require('../controllers/feedbackController')
const { basicAuth } = require('../middleware/auth')

const router = express.Router()

router.post('/feedback', createFeedback)
router.get('/admin/feedback', basicAuth, getAdminFeedback)

module.exports = router