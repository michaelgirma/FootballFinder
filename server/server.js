import express from 'express'
import {pool} from "./config/database.js"
import dotenv from 'dotenv'

dotenv.config()

const PORT = process.env.PORT || 3205

const app = express()

app.get('/', (req, res) => {
    res.json("Game API")
})

app.get('/teams', (req, res) => {
    pool.query('SELECT * FROM team', (error, result) => {
        if (error) throw error
        res.json(result)
    })
})

app.get('/events', (req, res) => {
    pool.query('SELECT * FROM event', (error, result) => {
        if (error) throw error
        res.json(result)
    })
})

app.get('/team/:id', (req, res) => {
    const id = parseInt(req.params.id)
    pool.query(`SELECT * FROM team WHERE id = ${id}`, (error, result) => {
        if (error) throw error
        res.json(result)
    })
})

app.get('/event/:location', (req, res) => {
    const location = req.params.location
    pool.query(`SELECT * FROM event WHERE location = $1`, [location], (error, result) => {
        if (error) throw error
        res.json(result)
    })
})

app.listen(PORT, () => {
    console.log(`server listening on http://localhost:${PORT}`)
})