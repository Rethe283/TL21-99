const express = require("express")
const router = express.Router()
const mongoose = require('mongoose')
const Vehicles = require('../../models/Vehicles')
const vehiclejson = require('../../Data/vehicles')

router.post('/', async(req,res) =>{
    try {
        await Vehicles.deleteMany()
        await Vehicles.insertMany(vehiclejson)
        res.status(200).send({status: "OK"})
    }
    catch(err){
        res.status(500).send({status: "failed", msg: err.message})
    }

})

module.exports = router