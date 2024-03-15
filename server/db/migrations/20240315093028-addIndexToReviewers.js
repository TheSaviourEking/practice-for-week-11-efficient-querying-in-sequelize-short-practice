'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addIndex('Reviewers', ['firstName', 'lastName']);
    await queryInterface.addIndex('Reviewers', ['firstName']);
    await queryInterface.addIndex('Reviewers', ['lastName']);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeIndex('Reviewers', ['firstName', 'lastName']);
    await queryInterface.removeIndex('Reviewers', ['firstName']);
    await queryInterface.removeIndex('Reviewers', ['lastName']);
  }
};
