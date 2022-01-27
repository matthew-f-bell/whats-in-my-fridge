/*=============================================
==          This is the models/index         ==
=============================================*/
// connection to database
const mongoose = require("mongoose");
const db = mongoose.connection;
const dbUrl = process.env.DATABASE_URL;

mongoose
        .connect(dbUrl)
        .then(() =>
            console.log(`+++++ MongoDB successfull connected at ${db.host}:${db.port}! +++++`)
        )
        .catch((err) => console.log(`----- MongoDB connection FAILED :( Error: ${err}) -----`))



module.exports = {
    Food: require("./Food"),
};