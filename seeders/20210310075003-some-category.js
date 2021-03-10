"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "categories",
      [
        {
          name: "Laptop",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Monitor",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Accessories",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Phone",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("categories", null, {});
  },
};
