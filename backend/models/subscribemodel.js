const mongoose = require('mongoose');

const mysubscribeSchema = mongoose.Schema({
   
    newsemail : String
   
})

const subscribedata =  mongoose.model("subscribedata",mysubscribeSchema)

module.exports =subscribedata