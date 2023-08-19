import express from 'express'
import pool from '../modules/pool.js'

const router = express.Router()

router.get('/', (req, res) => {
  const sqlText = `SELECT * FROM game_collection
	ORDER BY name ASC;`

  pool.query(sqlText)
    .then(response => {
      res.send(response.rows)
    })
    .catch(err => {
      console.error(`Error getting game list: ${err}`)
      res.sendStatus(418)
    })
})

router.post('/', (req, res) => {
  const sqlText = `INSERT INTO game_collection (name, date_added)
    VALUES ($1, $2)`
  const game = req.body
  pool.query(sqlText, [game.name, game.date_added])
  .then(() => {
    res.sendStatus(201)
  })
  .catch(err => {
    console.error(err)
  })
})

export default router