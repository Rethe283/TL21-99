const express = require("express")
const router = express.Router()
const mongoose = require('mongoose')
const Vehicles = require('../../models/Vehicles')
const vehiclejson = require('../../Data/vehicles')
const resetvehicles = async (req, res, next) => {
    const areVehiclesReset = await resetAllVehicles()
    if (areVehiclesReset === false) {
        res.send({ status: 'failed' })
    }
    res.send({ status: 'OK' })
}



const resetAllVehicles = async () => {
    const deleteTheVehicles = await Vehicles.deleteMany()
    const resetTheVehicles = await Vehicles.insertMany(vehiclejson, {vehicles: []})
    if (deleteTheVehicles && resetTheVehicles) return true
    else return false
}



module.exports = resetvehicles