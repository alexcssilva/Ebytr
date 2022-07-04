'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Tasks',
    [{
      id: 1,
      task: "cozinhar",
      status: "pendente",
      create_at: "22/07/22",
      update_at: "23/07/22",
    },
    {
      id: 2,
      task: "limpar",
      status: "pendente",
      create_at: "22/07/22",
      update_at: "23/07/22",
    },
  ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Tasks', null, {});
  }
};
