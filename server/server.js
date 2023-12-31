import bodyParser from 'body-parser'
import express from 'express'
import gameRouter from './routes/game.router.js'
import testRouter from './routes/test.router.js'

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/', testRouter)
app.use('/api/game', gameRouter)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
})