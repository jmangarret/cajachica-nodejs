const express = require('express');
const incomeRoute = express.Router();
const getIncome = require('../controller/getIncomes');

function preValidacion(req, res, next) {
    console.log('Time: ', Date.now());
    next();
}
// middleware that is specific to this incomeRoute
incomeRoute.use(preValidacion);

incomeRoute.get('/', async (req, res) => {
    const response = await getIncome.searchAll();
    res.send(response);
});

incomeRoute.get('/date/:date', async (req, res) => {
    const { date } = req.params;
    const response = await getIncome.searchByDate(date);
    res.send(response);
});

incomeRoute.get('/type/:type', async (req, res) => {
    const { type } = req.params;
    const response = await getIncome.searchByType(type);
    res.send(response);
});

incomeRoute.get('/numdoc/:num', async (req,res) => {
    const { num } = req.params;
    const response = await getIncome.searchByNumDoc(num);
    res.send(response);
});

incomeRoute.get('/typeandnumdoc/:type/:num', async (req, res) => {
    const { type, num } = req.params;
    const response = await getIncome.searchByTypeAndNumDoc(type,num);
    res.send(response);
})


module.exports = incomeRoute;