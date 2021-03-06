"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "orders",
      [
        {
          userId: 1,
          status: "Shipped",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,

          status: "Shipped",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,

          status: "Ordered",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 4,
          status: "Shipped",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 5,

          status: "Ordered",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,

          status: "Ordered",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 4,
          status: "Ordered",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("orders", null, {});
  },
};
