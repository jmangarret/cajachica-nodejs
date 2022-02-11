const express = require('express')
const { redirect } = require('express/lib/response')
const route = express.Router()
const pettyCashControl = require('../controller/pettyCashController')

route.post('/crear', async (req, res) => {
    // return res.send(req.body.userId);
    const response = await pettyCashControl.insertFirstData(req.body)
    return res.send(response)
})

route.get('/', async (req, res) => {
    const response = await pettyCashControl.searchAll();
    res.send(response);
});

module.exports = route