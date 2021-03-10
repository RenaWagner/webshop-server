"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "productCategories",
      [
        {
          productId: 1,
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          productId: 2,
          categoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          productId: 3,
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          productId: 4,
          categoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          productId: 5,
          categoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          productId: 5,
          categoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          productId: 6,
          categoryId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          productId: 7,
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          productId: 8,
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("productCategories", null, {});
  },
};
