import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

export default class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" }
  }

  login = (evt) => {
    evt.preventDefault();
    this.props.login(this.state.username, this.state.password);
  }

  onChange = (evt) => {
    this.setState({ [evt.target.id]: evt.target.value })
  }

  render() {
    return (
      <div>
        <h2>Login</h2>
        <form className="form-group" onSubmit={this.login} onChange={this.onChange} >
          <input style={{width: 200}} className="form-control" placeholder="User Name" id="username" />
          <input style={{width: 200}} className="form-control" placeholder="Password" id="password" />
          <button className="btn btn-default">Login</button>
        </form>
      </div>
    )
  }
}