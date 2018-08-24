import { Component } from 'react'
import { Query } from "react-apollo"
import gql from "graphql-tag"

import App from '../components/App'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default () => (
  <App>
    <Header />
    <Query query={GET_CARS}>
      {({ loading, error, data }) => {
        console.log('loading', loading)
        console.log('error', error)
        console.log('data', data)
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;
  
        return data.cars.map(( car, index ) => (
          <div key={index}>
            <h1 >{car.make}</h1>
            <h4 >{car.model}</h4>
            <h4 >{car.type}</h4>
            <h4 >{car.year}</h4>
          </div>
        ));
      }}
    </Query>
    <Footer/>
  </App>
)

const GET_CARS = gql`
  {
    cars {
      make
      model
      type
      year
    }
  }
`;
