const mongoose = require('mongoose');

const ticketSchema = mongoose.Schema({
    name :String,
    email : String,
    eventname:String,
    eventprice: String
})

const ticketsdata =  mongoose.model("tickets",ticketSchema)

module.exports =ticketsdata




