import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
  const response = 'testing'
  res.send(response)
})

export default router