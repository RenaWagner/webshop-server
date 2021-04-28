const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    id: ID!
    firstName: String!
    lastName: String!
    address: String!
    email: String!
    phone: String!
    isAdming: Boolean!
    password: String!
  }
  type Product {
    id: ID!
    name: String
    description: String
    imageUrl: String
    price: String
    category: [Category]
  }
  type Category {
    id: ID!
    name: String!
    products: [Product]
  }
  type Order {
    id: ID!
    user: User!
    products: [Product]
    status: String!
  }
  type Query {
    users: [User]
  }
`;

module.exports = { typeDefs };
