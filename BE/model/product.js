const mongoose = require("mongoose")
const product = mongoose.Schema(
    {
        name: { type: String, required: true },
        image: { type: String, required: true },
        type: { enum: ["man", "woman", "children"], required: true },
        price: { type: Number, required: true },
        quantity: { type: Number, required: true },
        description: { type: String, required: true }
    },
    {
        timestamps: true
    }
);
const Product = mongoose.model("Product", product)
module.exports = Product