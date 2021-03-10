"use strict";

const bcrypt = require("bcrypt");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          firstName: "John",
          lastName: "Gray",
          address: "11775  Clinton Street, Amsterdam 1123TE",
          email: "john@gmail.com",
          phone: "12345678",
          isAdmin: false,
          password: bcrypt.hashSync("test", 10),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Felix",
          lastName: "Wagner",
          address: "11775  Purperreiger Street, Amsterdam 1573TE",
          email: "felix@gmail.com",
          phone: "12345678",
          isAdmin: false,
          password: bcrypt.hashSync("test", 10),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Rena",
          lastName: "Wagner",
          address: "11775  Purperreiger Street, Amsterdam 1573TE",
          email: "rena@gmail.com",
          phone: "12345678",
          isAdmin: true,
          password: bcrypt.hashSync("test", 10),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Anna",
          lastName: "Loyd",
          address: "3A Henkenshage Amsterdam 1463TE",
          email: "anna@gmail.com",
          phone: "12345678",
          isAdmin: false,
          password: bcrypt.hashSync("test", 10),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Holly",
          lastName: "Wisltedon",
          address: "24B Princesstreet, Amsterdam 1123TE",
          email: "holly@gmail.com",
          phone: "12345678",
          isAdmin: false,
          password: bcrypt.hashSync("test", 10),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
