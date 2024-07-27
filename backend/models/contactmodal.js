const mongoose = require('mongoose');

const mycontactSchema = mongoose.Schema({
    name :String,
    email : String,
    phone:String,
    message: String
})

const contactdata =  mongoose.model("contactsdata",mycontactSchema)

module.exports =contactdata




