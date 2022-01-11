// trying to test models
// all models work except for pivot


const express = require("express")
const router = express.Router()

const pivot_model = require("../../models/Pivot")
const station_model = require("../../models/Stations")
const vehicles_model = require("../../models/Vehicles")
const passes_model = require("../../models/passes_model.js");


router.get('/', async (req, res) => {
    console.log('im in resetpasses')

    // const pivot = await pivot_model.find({})
    const station = await station_model.find({})
    // const vehicle = await vehicles_model.find({})
    // const passes = await passes_model.find({});
    
    res.send(station)
})

module.exports = router