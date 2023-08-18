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

export default router