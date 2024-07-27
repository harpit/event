const mongoose = require('mongoose');
const myaddspeakerSchema=mongoose.Schema({
    name:String,
    simage:String
   
})
const addspeakerdata=mongoose.model('speaker',myaddspeakerSchema)
module.exports=addspeakerdata