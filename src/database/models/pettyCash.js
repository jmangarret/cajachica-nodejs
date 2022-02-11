const { Model, DataTypes } = require("Sequelize")
const sequelize = require("../db")

class PettyCash extends Model {}
PettyCash.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: DataTypes.STRING(50),
    userId: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updateAt: DataTypes.DATE,
    status: DataTypes.INTEGER
}, {
    sequelize,
    modelName: 'pettyCash'
})

module.exports = PettyCash