const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
  }

  type Location {
    _id: ID
    locationName: String
    latitude: Float
    longitude: Float
    answerChoice: [String]
  }

  type Auth {
    token: ID!
    user: User
  }
  type Query {
    users: [User]
    user(username: String!): User
    me: User
    locations: [Location]
    location(_id: ID!): Location
  }
  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
`;
module.exports = typeDefs;
