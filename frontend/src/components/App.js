import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import "../style/App.css";

import facade from "../apiFacade";
import LogIn from './LogIn';
import LoggedIn from './LoggedIn';
import PeopleTable from './PeopleTable';
import NoMatch from './NoMatch'



class App extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedIn: false, error: "" }
  }

  logout = () => {
    facade.logout();
    this.setState({ loggedIn: false });
  }

  login = (user, pass) => {
    facade.login(user, pass)
      .then(res => this.setState({ loggedIn: true, error: "" }))
      .catch(err => this.setState({ error: JSON.stringify(err) }));
  }

  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path='/' render={() => {
              return (
                // {/* // if user isnt logged in return, and render, the login screen
                // // if logged in return home screen */}
                !this.state.loggedIn ? (<LogIn login={this.login} />) :
                  (<div>
                    <LoggedIn facade={facade} />
                    <button onClick={this.logout}>Logout</button>
                  </div>)
              )
            }} />

            {/* render NoMatch if no other Route components match
              the URL */}
            <Route path='/people' render={() => <PeopleTable facade={facade} />} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
        <p className="App-error">{this.state.error}</p>
      </div>
    )
  }
}
export default App;