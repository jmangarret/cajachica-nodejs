const incomeModel = require('../../database/models/income');

const getIncomes = {

    searchAll: async () => {
        try {
            const allData = await incomeModel.findAll();
            return allData;

        } catch (error) {
            return error;
        }
    },

    searchByDate: async (date) => {
        try {
            const dataByDate = await incomeModel.findAll({
                where: {
                  date: date
                }
              });
            return dataByDate;
            
        } catch (error) {
            return error;
        }
    },

    searchByType: async (type) => { 
        try {
            const dataByType = await incomeModel.findAll({
               where: {
                incomeType: type
               } 
            });
            return dataByType;
        } catch (error) {
            return error;
        }
    },

    searchByNumDoc: async (numDoc) => {
      try {
          const dataByNumDoc = await incomeModel.findAll({
              where:{
                  numberDoc: numDoc
              }
          });
          return dataByNumDoc;
          
      } catch (error) {
          return error;
      }
    },

    searchByTypeAndNumDoc:  async (type,numDoc) => {
        try {
            const dataByTypeandNumDoc = await incomeModel.findAll({
                where:{
                    incomeType: type,
                    numberDoc: numDoc
                }
            });
            console.log(dataByTypeandNumDoc)
            return dataByTypeandNumDoc;
        } catch (error) {
            return error;
        }
    },

    newIncome: async (data) => {
        try {
            const insert = await incomeModel.create({
                idPettyCash: data.idPettyCash,
                date: data.date,
                incomeType: data.incomeType,
                numberDoc: data.numberDoc,
                client: data.client,
                concept: data.concept,
                amount: data.amount,
                userId: data.userId,
                status: 1
            })
            return insert
        } catch (error) {
            return error
        }
    },

    updateIncome: async (id, data) => {
        try { 
            const updateData = await incomeModel.update({ 
                incomeType: data.incomeType,
                numberDoc: data.numberDoc,
                client: data.client,
                concept: data.concept,
                userId: data.userId
            },{
                where: {
                    id
                }
            });
            return updateData
        } catch (error) {
            return error
        }
    }, 

    deleteIncome: async (id) => {
        try {
            const deleteIncome = await incomeModel.update({
                status: 0
            },{
                where: {
                    id
                }
            })
            return deleteIncome
        } catch (error) {
            return error
        }
    }
    
}

module.exports = getIncomes;