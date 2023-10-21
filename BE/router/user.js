const router = require("express").Router()
const { getUser, createUser, putUser, patchUser, deleteUser } = require("../controllers/user")
const user = [
    {
        name: "Minh Quy",
        age: 21
    }
]

router.get('/', getUser)

router.post('/', createUser)

router.put('/', putUser)

router.patch('/', patchUser)

router.delete('/', deleteUser)

module.exports = router