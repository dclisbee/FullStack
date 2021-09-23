'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Products', [{
      title: 'Now Hat',
      price: '$35.00',
      image: 'https://cdn.shopify.com/s/files/1/2445/4975/products/19404403_outerknown_EvolutionDadHat_MBL_f_bd_1400x1400.jpg?v=1573022058',
      createdAt: new Date(),
      updatedAt: new Date()
  }], {});
},
    
  
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Products', null, {});
  }
};
