const pettyCashModel = require('../../database/models/pettyCash')

const pettyCashControl = {

    insertFirstData: async (data) => {
        try {
            const insert = await pettyCashModel.create({
                name: data.name,
                userId: data.userId,
                status: 1
            })
            return insert
        } catch (error) {
            return error
        }
    },

    searchAll: async () => {
        try {
            const allData = await pettyCashModel.findAll();
            return allData;

        } catch (error) {
            return error;
        }
    },
}

module.exports = pettyCashControl