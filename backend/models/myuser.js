const mongoose = require('mongoose');

const myuserSchema = mongoose.Schema({
    name :String,
    email: {
        type:String,
        
        unique:true,
    
    },
    pass:String,
    type: String
})

const mydata =  mongoose.model("myusers",myuserSchema)

module.exports =mydata




