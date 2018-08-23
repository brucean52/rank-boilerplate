import { Component } from 'react'
import { Query } from "react-apollo"
import gql from "graphql-tag"

import App from '../components/App'
import Header from '../components/Header'

export default () => (
  <App>
    <Header />
    <Query query={GET_BOOKS}>
      {({ loading, error, data }) => {
        console.log('loading', loading)
        console.log('error', error)
        console.log('data', data)
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;
  
        return data.books.map(( item ) => (
          <div key={item.title}>
            <h1 >{item.title}</h1>
            <h4 >{item.author}</h4>
          </div>
        ));
      }}
    </Query>
  </App>
)

const GET_BOOKS = gql`
  {
    books {
      title
      author
    }
  }
`;
