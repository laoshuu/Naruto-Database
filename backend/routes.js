import express from 'express'
import { db } from './mysql'
const router = express.Router()

router.get('/get-data', (_, res) => {
    // console.log(genNumber())
    // res.json({ msg: 'The game has started.' })
    db.query('SELECT * FROM tail_monsters', (err, rows, fields) => {
        console.log(rows)
    })
    // res.send({ msg: "requested" })
})

// router.get('/guess', (req, res) => {
//     const number = getNumber()
//     const guessed = roughScale(req.query.number, 10)
//     if (!guessed || guessed < 1 || guessed > 100) {
//         res.status(406).send({ msg: 'Not a legal number.' })
//     }
//     else if (number === guessed) {
//         res.send({ msg: 'Equal' })
//     }
//     else {
//         const left = guessDec();
//         console.log(left)
//         if (left == 0)
//             res.send({ msg: 'Gameover' })
//         else
//             (guessed > number) ? res.send({ msg: 'Smaller' }) : res.send({ msg: 'Bigger' })
//     }
// })

// router.post('/restart', (_, res) => {
//     console.log(genNumber())
//     guessReset();
//     res.json({ msg: 'Restart the game' })
// })

export default router;