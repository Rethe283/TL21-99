const express = require("express")
const router = express.Router()
const passes_model = require("../../models/passes_model")

router.post('/', async (req, res) => {
    try{
        await passes_model.deleteMany()
        res.status(200).send({status: "OK"})
    } catch(err){
        res.status(500).send({status: "failed", msg: err.message})
    }
})

module.exports = router