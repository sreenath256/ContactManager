const express = require('express')

const router = express.Router()

router.get('/',(req,res)=>{
    res.status(200).json({status:"Api calling Success"})
})

module.exports = router