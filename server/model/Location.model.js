const mongoose = require("mongoose")

const locationSchema = new mongoose.Schema ({
    locationname: {type: String, required: false }, 
    address: {type: String, required: false },
    lat: {type: Number, required: false },
    lng: {type: Number, required: false },
})

const LocationModel = mongoose.model("location", locationSchema)

module.exports = { LocationModel }    