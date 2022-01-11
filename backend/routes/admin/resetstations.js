const express = require("express")
const router = express.Router()

router.post('/', (req, res) => {

    res.status(200).send({"status":"OK"})
router.get('/', (req, res) => {
    res.send({msg: 'im in resetstations'})
})

module.exports = router