import React from 'react';
import logo from './logo.svg';
import './App.css';
import Users from "./Users";
import { graphql } from 'react-apollo';
import { loader } from 'graphql.macro';

const query = loader('./Users.graphql');

function App(props) {
  const {data: {users = []}} = props;
  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
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
        <Users users={users}/>
      </div>
  );
}

export default graphql(query)(App);



