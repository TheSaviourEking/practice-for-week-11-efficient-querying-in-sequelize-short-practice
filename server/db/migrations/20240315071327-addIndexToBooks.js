'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.addIndex('Books', ['price']);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    queryInterface.removeIndex('Books', ['price'])
  }
};
