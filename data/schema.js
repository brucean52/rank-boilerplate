const { gql } = require('apollo-server-koa');

const typeDefs = gql`
    type Query {
      cars: [Car],
      findCar(make: String, model: String, year: Int): Car
    }
    type Car { 
      make: String, 
      model: String,
      year: Int,
      type: String
    }
`;
module.exports = typeDefs;