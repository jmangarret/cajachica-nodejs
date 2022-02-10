const express = require('express');
const incomeRoute = express.Router();
const getAllIncome = require('../models/getAll');
function preValidacion(req, res, next) {
    console.log('Time: ', Date.now());
    next();
}
// middleware that is specific to this incomeRoute
incomeRoute.use(preValidacion);

incomeRoute.get('/', (req, res) => {
    const response = getAllIncome();
    res.send(response);
});

incomeRoute.get('/user/:id/:cedula', (req, res) => {
    const {id, cedula } = req.params;
    res.send('Hello user gggg' + id + cedula);
});

incomeRoute.post('/', function (req, res) {
    const data = req.body;
    console.log(data);
    res.send(req.body);
});


module.exports = incomeRoute;

