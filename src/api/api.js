const express = require('express')
const http = require('serverless-http');

const app = express()

app.get('/', (req, res) =>{
    res.json({
        message: 'your first serverless app'
    })
});

module.exports.handler = http(app);