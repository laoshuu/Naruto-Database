import express from 'express'
import cors from 'cors'
import route from './routes'
import bodyParser from 'body-parser';
import { db, connection } from './mysql'

connection()

const app = express()
// init middleware
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
// define routes
app.use('/api', route)
// define server
const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`Server is up on port ${port}.`)
})
