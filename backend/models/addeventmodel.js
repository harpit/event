const mongoose = require('mongoose');
const myaddeventSchema=mongoose.Schema({
    name:String,
    title:String,
    speaker:String,
    description:String,
    date:String,
    time:String,
    venue:String,
    image:String,
    status:{
        type:String,
        default:'Pending',
    },
    ticket: Number
})
const addeventdata=mongoose.model('myeventsdatas',myaddeventSchema)
module.exports=addeventdata