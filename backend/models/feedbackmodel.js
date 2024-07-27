const mongoose = require('mongoose');

const myfeedbackSchema = mongoose.Schema({
    name :String,
    email : String,
    phone:String,
    feedback: String
})

const feedbackdata =  mongoose.model("feedbackdata",myfeedbackSchema);

module.exports =feedbackdata