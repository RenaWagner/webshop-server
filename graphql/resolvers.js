const { ApolloError } = require("apollo-server-express");
const bcrypt = require("bcrypt");
const { toJWT } = require("../auth/jwt");

module.exports = {
  Query: {
    users: async (parent, _args, { db }, info) => {
      return db.user.findAll();
    },
  },
};
