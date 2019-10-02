const express = require('express')
const characterRouter = require('./characters/CharacterRouter.js')
//const locationRouter = require('./data/helpers/projectRouter.js')

const server = express()
server.use(express.json())
server.use('/characters', characterRouter)
//server.use('/locations', locationRouter)

server.use('/', (req, res) => {
    res.send('GRIIIIFFFITTH!!!!!!!!');
});
module.exports = server 