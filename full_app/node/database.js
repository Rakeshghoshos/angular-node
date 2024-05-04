const mongoose = require("mongoose");

const db = async()=>{
    await mongoose.connect("mongodb://192.168.29.85:27017/test");
    console.log("database connected");
}

module.exports = db;