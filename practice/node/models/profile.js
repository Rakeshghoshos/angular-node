const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const profileSchema = new Schema({
    name:String,
    email:String,
    password:String
});

const profileModel = mongoose.model('profile',profileSchema);

module.exports = profileModel;