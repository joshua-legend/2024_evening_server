const express = require('express')
const router = express.Router()

exports.createGetRoute = (url,data) => router.get(url,(req,res)=> res.json(data))
