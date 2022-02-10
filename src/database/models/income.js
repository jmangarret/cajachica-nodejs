const { Model , DataTypes } = require('sequelize');
const sequelize = require('../db');

class Income extends Model {}
Income.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    idPettyCash: DataTypes.INTEGER,
    date: DataTypes.DATE,
    incomeType: DataTypes.STRING(50),
    numberDoc: DataTypes.STRING(50),
    client: DataTypes.STRING(50),
    concept: DataTypes.STRING(50),
    amount: DataTypes.DECIMAL(10,2),
    userId: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updateAt: DataTypes.DATE,
    status: DataTypes.INTEGER
}, {
    sequelize, 
    modelName: 'income'
});

module.exports = Income;