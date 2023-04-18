import {db} from "../index.js";

const getUsers = async (req, res, next) => {
    try {
        const q = "SELECT * FROM users"
        db.query(q, (err, data) => {
            if (err) {
                return res.json(err)
            } else {
                return res.json(data)
            }
        })
    } catch (error) {
        next(error)
    }
}

const createUser = async (req, res, next) => {
    try {
        const q = "INSERT INTO users (`name`,`score`,`level`) VALUES (?)"
        const {name, score = 0, level = 1} = req.body
        const values = [name, score, level]

        db.query(q, [values], (err, data) => {
            if (err) return res.json(err)
            return res.json("User created")
        })
    } catch (error) {
        next(error)
    }
}

const updateUser = async (req, res, next) => {
    try {
        const {id, name, score = 0, level = 1} = req.body
        const q = `UPDATE users SET name="${name}",score="${score}",level="${level}" WHERE id=${id}`

        db.query(q, (err, data) => {
            if (err) return res.json(err)
            return res.json("User updated")
        })
    } catch (error) {
        next(error)
    }
}

export default {
    getUsers,
    createUser,
    updateUser
}