const mongoose = require("mongoose");
require("dotenv").config();

exports.connect = () => {
    mongoose.connect("mongodb://0.0.0.0:27017/StudyNotionDB", {
        useNewUrlParser: true,
        useUnifiedTopology:true,
    })
    .then(() => console.log("DB Connected Successfully"))
    .catch( (error) => {
        console.log("DB Connection Failed");
        console.error(error.message);
        process.exit(1);
    } )
};