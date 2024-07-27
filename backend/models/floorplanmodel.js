const mongoose = require('mongoose')
const myfloorplanschema=mongoose.Schema({
    number: Number,
  Capacity: String,
  venue: String,
  floorimage: String
})
const addfloorplandatas=mongoose.model('floorplandatas',myfloorplanschema)
module.exports=addfloorplandatas