"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Categories",
      [
        {
          name: "Salary",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Rental Income",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Dividends",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Housing",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Groceries",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Entertainment",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Transportation",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
