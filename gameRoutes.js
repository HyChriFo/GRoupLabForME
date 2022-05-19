const path = require('path')
const express = require('express')
const gameRouter = express.Router()

mainRouter.get('/', function (req, res) {
    res.send('Hello World. I\'m a Node app.')
    })
    
gameRouter.get('/Public', function (req, res) {
res.sendFile(path.join(__dirname, 'View', 'SinglePlayer.html'))
})
module.exports = gameRouter