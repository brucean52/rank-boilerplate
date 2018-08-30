const { gql } = require('apollo-server-koa');

const typeDefs = gql`
    type Query {
      cars: [Car]
    }
    type Car { 
      make: String, 
      model: String,
      year: Int,
      type: String
    }
`;
module.exports = typeDefs;