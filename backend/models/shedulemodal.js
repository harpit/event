const mongoose = require ('mongoose')
const MysheduleSchema = mongoose.Schema({
   date:String,
   day:String,
    time:String,
    subject:String,
    venue:String,
    speaker:String
})
const myschedule = mongoose.model("shedules",MysheduleSchema)
module.exports =myschedule