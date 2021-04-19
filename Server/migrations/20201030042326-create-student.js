'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Students', {
      Id_student: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      Id_class:{
        type: Sequelize.INTEGER,
        allowNull: false
      },
      Name: {
        type: Sequelize.STRING
      },
      Dob: {
        type: Sequelize.DATE
      },
      Gender: {
        type: Sequelize.STRING
      },
      Address: {
        type: Sequelize.STRING
      },
      Phone: {
        type: Sequelize.STRING
      },
      Password: {
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
    await queryInterface.dropTable('Students');
  }
};