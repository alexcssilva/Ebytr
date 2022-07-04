'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Tasks', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      task: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      create_at: {
        type: Sequelize.DATE,
        allowNull: false,
        underscored: true,
      },
      update_at: {
        type: Sequelize.DATE,
        allowNull: false,
        underscored: true,
      }
    })

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.createTable('Tasks');
  }
};
