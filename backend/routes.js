import express from 'express'
import { db } from './mysql'
const router = express.Router()

router.get('/get-data', (req, res) => {
    const query_type = req.query.type
    switch (query_type) {
        case 'character':
            db.query(`WITH A as (select character_name,GROUP_CONCAT(DISTINCT name SEPARATOR ',') as summon from summon_monsters group by character_name),B as (select name,GROUP_CONCAT(DISTINCT jitsu SEPARATOR ',') as jitsu from who_use_jitsu group by name)select name,family,gender,grade,village,summon,jitsu from (A right outer join characters on A.character_name = characters.name) natural join B where name like '%${req.query.queryString}%'`, (err, rows, fields) => {
                const ret = rows.map((item) => {
                    console.log(item)
                    let jitsu
                    if (!item.jitsu)
                        jitsu = item.jitsu
                    else jitsu = item.jitsu.split(",");
                    return (
                        {
                            name: item.name,
                            family: item.family,
                            gender: item.gender,
                            grade: item.grade,
                            village: item.village,
                            summon: item.summon,
                            jitsu: jitsu
                        }
                    )
                });
                // console.log(ret)
                res.send({ msg: ret })
            })
            break;
        case 'jitsu':
            db.query(`WITH A as (select jitsu,GROUP_CONCAT(DISTINCT name SEPARATOR ',') as name from who_use_jitsu group by jitsu)select jitsu,rating,class,attribute,description,A.name as characters from A join jitsu on A.jitsu = jitsu.name where jitsu like '%${req.query.queryString}%'`, (err, rows, field) => {
                const ret = rows.map((item) => {
                    console.log(item)
                    let characters
                    if (!item.characters)
                        characters = item.characters
                    else characters = item.characters.split(",");
                    return (
                        {
                            name: item.jitsu,
                            rating: item.rating,
                            class: item.class,
                            attribute: item.attribute,
                            character: characters,
                            description: item.description
                        }
                    )
                });
                // console.log(ret)
                res.send({ msg: ret })
            })
            break;
        case 'village':
            db.query(`with A as (SELECT village,GROUP_CONCAT(DISTINCT name SEPARATOR ',') as characters from characters GROUP BY village),B as (SELECT * from characters natural join man_force),C as (select village as name, characters, monster from A natural join B)select name, characters, GROUP_CONCAT(DISTINCT monster SEPARATOR ',') as monsters, country_name, description from C natural join villages group by name having name like "%${req.query.queryString}%"`, (err, rows, field) => {
                const ret = rows.map((item) => {
                    console.log(item)
                    // let characters
                    // if (!item.characters)
                    //     characters = item.characters
                    // else characters = item.characters.split(",");
                    return (
                        {
                            name: item.name,
                            country: item.country_name,
                            character: item.characters.split(","),
                            description: item.description,
                            man_force: item.monsters.split(",")
                        }
                    )
                });
                // console.log(ret)
                res.send({ msg: ret })
            })
            break;
        case 'tail_monster':
            db.query(`with C as (SELECT A.name as name, monster, sub_name, description FROM man_force as A join tail_monsters as B on A.monster=B.name)select  GROUP_CONCAT(DISTINCT name SEPARATOR ',') as man_force, monster, sub_name, description from C GROUP BY monster HAVING monster like "%${req.query.queryString}%"`, (err, rows, field) => {
                const ret = rows.map((item) => {
                    console.log(item)
                    // let characters
                    // if (!item.characters)
                    //     characters = item.characters
                    // else characters = item.characters.split(",");
                    return (
                        {
                            name: item.monster,
                            nickname: item.sub_name,
                            main_force: item.man_force,
                            description: item.description,
                        }
                    )
                });
                // console.log(ret)
                res.send({ msg: ret })
            })
            break;
        case 'country':
            db.query(`with A as ( select country_name as name, GROUP_CONCAT(DISTINCT name SEPARATOR ',') as villages FROM villages GROUP BY country_name) select * from A natural join countries where name like "%${req.query.queryString}%"`, (err, rows, field) => {
                const ret = rows.map((item) => {
                    console.log(item)
                    // let characters
                    // if (!item.characters)
                    //     characters = item.characters
                    // else characters = item.characters.split(",");
                    return (
                        {
                            name: item.name,
                            village: item.villages.split(","),
                            description: item.description,
                        }
                    )
                });
                // console.log(ret)
                res.send({ msg: ret })
            })
            break;
        default:
            break;
    }

    // case 2


})



// input: 角色名, output: 角色名 性別 家族 等級 忍村 組織 召喚獸 人柱力 擁有屬性 術
// input: 忍術名, output: 忍術名 等級 術種 使用者 說明
// input: 忍術術種, output: 忍術名 等級 術種 使用者 說明
// input: 忍村, output: 忍村名 國家名 角色 擁有人柱力 說明
// input: 國家, output: 國家名 忍村名 擁有人柱力 說明
// input: 尾獸, output: 尾獸名 別稱 人柱力 說明 所屬忍村



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