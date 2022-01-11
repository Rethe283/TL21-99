const express = require("express")
const router = express.Router()
const mongoose = require('mongoose')

router.get('/', (req, res) => {
    if (mongoose.connection.readyState === 0){
        res.status(500).send({"status":"failed", "dbconnection":"disconnected"})
    }
    else if (mongoose.connection.readyState === 1){
        res.status(200).send({"status":"OK", "dbconnection":"connected"})
    }
    else if (mongoose.connection.readyState === 2){
        res.send({"status":"failed", "dbconnection":"connecting"})
    }
    else {
        res.send({"status":"failed", "dbconnection":"disconnecting"})
    }
})

module.exports = router