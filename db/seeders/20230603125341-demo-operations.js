"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Operations",
      [
        {
          category: "Housing",
          concept: "Education",
          amount: 67,
          date: new Date("2024/02/02"),
          type: "Expense",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category: "Groceries",
          concept: "Utilities",
          amount: 842,
          date: new Date("2024/03/18"),
          type: "Expense",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category: "Housing",
          concept: "Rent",
          amount: 295,
          date: new Date("2022/02/04"),
          type: "Expense",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category: "Entertainment",
          concept: "Travel",
          amount: 545,
          date: new Date("2024/02/17"),
          type: "Expense",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category: "Entertainment",
          concept: "Entertainment",
          amount: 651,
          date: new Date("2022/07/18"),
          type: "Expense",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category: "Housing",
          concept: "Education",
          amount: 971,
          date: new Date("2021/08/09"),
          type: "Expense",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category: "Transportation",
          concept: "Transportation",
          amount: 841,
          date: new Date("2024/02/08"),
          type: "Expense",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category: "Entertainment",
          concept: "Entertainment",
          amount: 305,
          date: new Date("2022/11/27"),
          type: "Expense",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category: "Entertainment",
          concept: "Entertainment",
          amount: 553,
          date: new Date("2024/04/11"),
          type: "Expense",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category: "Groceries",
          concept: "Groceries",
          amount: 76,
          date: new Date("2023/05/13"),
          type: "Expense",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category: "Housing",
          concept: "Rent",
          amount: 718,
          date: new Date("2023/12/12"),
          type: "Expense",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category: "Entertainment",
          concept: "Travel",
          amount: 390,
          date: new Date("2024/05/05"),
          type: "Expense",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category: "Entertainment",
          concept: "Dining Out",
          amount: 830,
          date: new Date("2022/02/25"),
          type: "Expense",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category: "Entertainment",
          concept: "Travel",
          amount: 934,
          date: new Date("2021/08/26"),
          type: "Expense",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category: "Entertainment",
          concept: "Travel",
          amount: 767,
          date: new Date("2022/04/19"),
          type: "Expense",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category: "Transportation",
          concept: "Transportation",
          amount: 686,
          date: new Date("2023/04/21"),
          type: "Expense",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category: "Housing",
          concept: "Healthcare",
          amount: 892,
          date: new Date("2022/07/26"),
          type: "Expense",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category: "Groceries",
          concept: "Groceries",
          amount: 868,
          date: new Date("2024/01/07"),
          type: "Expense",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category: "Transportation",
          concept: "Transportation",
          amount: 558,
          date: new Date("2022/10/26"),
          type: "Expense",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category: "Transportation",
          concept: "Transportation",
          amount: 612,
          date: new Date("2022/10/10"),
          type: "Expense",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category: "Housing",
          concept: "Education",
          amount: 712,
          date: new Date("2023/12/08"),
          type: "Expense",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category: "Transportation",
          concept: "Transportation",
          amount: 659,
          date: new Date("2022/12/20"),
          type: "Expense",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category: "Entertainment",
          concept: "Travel",
          amount: 96,
          date: new Date("2022/10/04"),
          type: "Expense",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category: "Entertainment",
          concept: "Dining Out",
          amount: 829,
          date: new Date("2022/06/25"),
          type: "Expense",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category: "Housing",
          concept: "Healthcare",
          amount: 527,
          date: new Date("2023/12/05"),
          type: "Expense",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category: "Entertainment",
          concept: "Dining Out",
          amount: 891,
          date: new Date("2023/07/17"),
          type: "Expense",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category: "Entertainment",
          concept: "Dining Out",
          amount: 725,
          date: new Date("2024/03/12"),
          type: "Expense",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category: "Groceries",
          concept: "Utilities",
          amount: 939,
          date: new Date("2021/07/26"),
          type: "Expense",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category: "Entertainment",
          concept: "Entertainment",
          amount: 402,
          date: new Date("2023/02/13"),
          type: "Expense",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category: "Housing",
          concept: "Education",
          amount: 859,
          date: new Date("2022/12/04"),
          type: "Expense",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category: "Dividends",
          concept: "Debt Repayment",
          amount: 4401,
          date: new Date("2022/07/26"),
          type: "Income",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category: "Rental income",
          concept: "Rent",
          amount: 1113,
          date: new Date("2023/09/20"),
          type: "Income",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category: "Salary",
          concept: "Salary",
          amount: 1659,
          date: new Date("2021/10/15"),
          type: "Income",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category: "Salary",
          concept: "Salary",
          amount: 2304,
          date: new Date("2021/07/27"),
          type: "Income",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category: "Salary",
          concept: "Salary",
          amount: 1699,
          date: new Date("2022/01/07"),
          type: "Income",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category: "Rental income",
          concept: "Rent",
          amount: 998,
          date: new Date("2021/09/04"),
          type: "Income",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category: "Rental income",
          concept: "Rent",
          amount: 1017,
          date: new Date("2021/07/22"),
          type: "Income",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category: "Rental income",
          concept: "Rent",
          amount: 4191,
          date: new Date("2022/05/14"),
          type: "Income",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category: "Salary",
          concept: "Salary",
          amount: 3837,
          date: new Date("2024/01/18"),
          type: "Income",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category: "Salary",
          concept: "Salary",
          amount: 2427,
          date: new Date("2023/12/03"),
          type: "Income",
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
