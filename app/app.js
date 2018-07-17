import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import React from 'react';
import { ApolloProvider } from 'react-apollo';
import ReactDOM from 'react-dom'

const client = new ApolloClient({
  link: new HttpLink('https://yduamo2zf5erfnw6t3msaihsnu.appsync-api.us-east-1.amazonaws.com/graphql'),
  cache: new InMemoryCache(),
});


ReactDOM.render(
  <ApolloProvider client={client}>
    <div>Hello world</div>
  </ApolloProvider>,
  document.getElementById('root'),
);
