import React, { Component } from 'react';
import PeopleTable from './PeopleTable';

import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom'


export default class LoggedIn extends Component {
    constructor(props) {
      super(props);
      
    }
  
    render() {
      return (
        <div>
          <h2>HOME (loggedin)</h2>
          <NavLink to={'/people'} activeClassName="active">See all people</NavLink>
        </div>
      )
    }
  }