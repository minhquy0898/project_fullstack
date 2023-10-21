const user = [
    {
        name: "Minh Quy",
        age: 21
    }
]
const getUser = (req, res) => {
    return res.status(200).json({ message: " Get Success" })
}

const createUser = (req, res) => {
    const username = req.body.username
    const age = req.body.age
    const newUser = { name: username, age: age }
    return res.status(200).json({ message: "Success Post", user: [...user, newUser] })
}

const putUser = (req, res) => {
    return res.status(200).json({ message: "Success Put" })
}

const patchUser = (req, res) => {
    return res.status(200).json({ message: "Success Put" })
}

const deleteUser = (req, res) => {
    return res.status(200).json({ message: "Success Put" })
}

module.exports = {
    getUser, createUser, putUser, patchUser, deleteUser
}