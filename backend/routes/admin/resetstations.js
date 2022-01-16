const express = require("express")
const router = express.Router()


const stationsdata = require('../../Data/stations')
const Station = require('../../models/Stations')

router.post('/',  async (req, res) => {
    try{
        await Station.deleteMany() 
        await Station.insertMany(stationsdata)
        res.status(200).send({status: "OK"})
    } catch(err){
        res.status(500).send({status: "failed", msg: err.message})
    }

})

module.exports = router

