const express = require("express")
const router = express.Router()
const csvFilePath = "./Data/newpasses2199.csv";
const Passes = require('../../models/passes_model');
const csv = require("csvtojson");

router.post('/', async(req,res) =>{
    try {
        const csvFilePath = req.query.file;
        const jsonArray = await csv().fromFile(csvFilePath);
        //await Passes.deleteMany();
        await Passes.insertMany(jsonArray);
        res.status(200).send({status: "OK"})
    }
    catch(err){
        res.status(500).send({status: "failed", msg: err.message})
    }

})

module.exports = router