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
    }
    
}

module.exports = getIncomes;