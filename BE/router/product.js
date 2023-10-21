const router = require("express").Router()

const user = [
    {
        name: "Minh Quy",
        price: 21
    }
]

router.get('/', (req, res) => {
    return res.status(200).json({ message: "Success Get", user })
})

router.post('/', (req, res) => {
    const username = req.body.username
    const age = req.body.age
    const newUser = { name: username, age: age }
    return res.status(200).json({ message: "Success Post", user: [...user, newUser] })
})

router.put('/', (req, res) => {
    return res.status(200).json({ message: "Success Put" })
})

router.patch('/', (req, res) => {
    return res.status(200).json({ message: "Success Patch" })
})

router.delete('/', (req, res) => {
    return res.status(200).json({ message: "Success Delete" })
})

module.exports = router