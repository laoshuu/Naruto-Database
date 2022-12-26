import mysql from "mysql"

const db = mysql.createConnection({
    host: 'localhost',
    user: 'Piyan',
    password: 'password',
    database: 'naruto',
})
const connection = () => {
    db.connect((err) => {
        if (err) console.log("connection error")
        else console.log("Connected to naruto database")
    })
}

export { db, connection };