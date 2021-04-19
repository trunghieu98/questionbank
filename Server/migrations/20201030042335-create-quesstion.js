'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Quesstions', {
      Id_quesstion: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      Id_teacher: {
        type: Sequelize.STRING
      },
      Id_level: {
        type: Sequelize.STRING
      },
      title: {
        type: Sequelize.STRING
      },
      Name_quesstion: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Quesstions');
  }
};