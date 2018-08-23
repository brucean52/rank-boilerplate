const { gql } = require('apollo-server-koa');

const typeDefs = gql`
    type Query {
      cars: [Car],
      findByMake(make: String): Car,
      findByModel(model: String): Car,
      findByYear(year: Int): Car,
    }
    type Car { 
      make: String, 
      model: String,
      year: Int,
      type: String
    }
`;
module.exports = typeDefs;