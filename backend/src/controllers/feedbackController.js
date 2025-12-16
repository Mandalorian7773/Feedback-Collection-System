const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const createFeedback = async (req, res) => {
  try {
    console.log('Received feedback data:', req.body)
    const { name, email, phone, rating, feedback } = req.body
    const newFeedback = await prisma.feedback.create({
      data: { name, email, phone, rating, feedback }
    })
    console.log('Created feedback:', newFeedback)
    res.json(newFeedback)
  } catch (error) {
    console.error('Error creating feedback:', error)
    res.status(500).json({ error: 'Failed to create feedback' })
  }
}

const getAdminFeedback = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1
    const limit = parseInt(req.query.limit) || 10
    const skip = (page - 1) * limit
    
    const [feedback, total] = await Promise.all([
      prisma.feedback.findMany({
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' }
      }),
      prisma.feedback.count()
    ])
    
    res.json({
      data: feedback,
      total,
      page,
      limit
    })
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch feedback' })
  }
}

module.exports = { createFeedback, getAdminFeedback }