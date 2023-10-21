const mongoose = require("mongoose")
const user = mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        isAdmin: { type: Boolean, default: false, required: true },
        phone: { type: Number, required: true },
        address: { type: String, required: true }
    },
    {
        timestamps: true
    }
);
const User = mongoose.model("User", user);
module.exports = User;