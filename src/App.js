import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {ApolloProvider} from "react-apollo";
import {RestLink} from "apollo-link-rest";
import {ApolloClient} from "apollo-client";
import {InMemoryCache} from "apollo-cache-inmemory";

const restLink = new RestLink({
  uri: 'https://regres.io',
  credentials: 'same-origin',
});

const client = new ApolloClient({
  link: restLink,
  cache: new InMemoryCache(),
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

const ApolloApp = () => (
    <ApolloProvider client={client}>
      <App/>
    </ApolloProvider>
);

export default ApolloApp;
