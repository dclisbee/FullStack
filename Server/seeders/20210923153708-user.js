'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('UserTables', [{
      userId: 'Tired',
      email: 'brainhurts@exhausted.com',
      password: 'almostdone',
      createdAt: new Date(),
      updatedAt: new Date()
  }], {});
},
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('UserTables', null, {}); 
  }
};
