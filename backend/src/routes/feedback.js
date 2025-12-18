const express = require('express')
const { createFeedback, getAdminFeedback, deleteFeedback } = require('../controllers/feedbackController')
const { basicAuth } = require('../middleware/auth')

const router = express.Router()

router.post('/feedback', createFeedback)
router.get('/admin/feedback', basicAuth, getAdminFeedback)
router.delete('/admin/feedback', deleteFeedback)

module.exports = router;
