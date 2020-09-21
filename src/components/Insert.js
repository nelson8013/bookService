import React, { Component } from "react";
import axios from 'axios';

export default class Insert extends Component {
  constructor(props) {
    super(props);
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName  = this.onChangeLastName.bind(this);
    this.onChangeEmail     = this.onChangeEmail.bind(this);
    this.onChangePassword  = this.onChangePassword.bind(this);
    this.onSubmit          = this.onSubmit.bind(this);

    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      password: ""
    };
  }

  onChangeFirstName(e) {
    this.setState({
      first_name: e.target.value,
    });
  }

  onChangeLastName(e) {
    this.setState({
      last_name: e.target.value,
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

onSubmit(e) {
    e.preventDefault();

    const obj = {
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        email: this.state.email,
        password: this.state.password
    };

    axios.post('http://localhost:80/bookServiceApi/insert.php',obj).then(res=> console.log(res.data));
  }

  render() {
    return (
      <div className="mt-5">
        <h3>Add New User</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
                type="text"
                name="first_name"
                className="form-control"
                placeholder="John"
                value={this.state.first_name}
                onChange={this.onChangeFirstName}
            />
          </div>

          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              name="last_name"
              className="form-control"
              placeholder="Doe"
              value={this.state.last_name}
              onChange={this.onChangeLastName}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="example@example.com"
              value={this.state.email}
              onChange={this.onChangeEmail}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Just make it secure. !@T455-)YRDo0. "
              value={this.state.password}
              onChange={this.onChangePassword}
            />
          </div>

          <div className="form-group">
            <input type="submit" value="Register" className="btn btn-info" />
          </div>
        </form>
      </div>
    );
  }
}
