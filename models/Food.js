/*=============================================
==        This is the Schema in Models       ==
=============================================*/

const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "You must provide a name for the food"],
        },
        date_purchased: {
            type: Date,
            required: [true, "You must enter the date of when you purchased the food"]
        },
        type_of_food: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Food", foodSchema);
