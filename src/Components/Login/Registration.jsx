import React from "react";
import axios from "axios";
import { Redirect } from 'react-router-dom';
export default class Registration extends React.Component {
  state = {
    username: " ",
    usr_password: " ",
    confirm_password: " ",
    email: " ",
    mobileno: " ",
    status: " ",
  };

  handleChange1 = (event) => {
    this.setState({ username: event.target.value });
  };
  handleChange2 = (event) => {
    this.setState({ usr_password: event.target.value });
  };
  handleChange3 = (event) => {
    this.setState({ confirm_password: event.target.value });
  };
  handleChange4 = (event) => {
    this.setState({ email: event.target.value });
  };
  handleChange5 = (event) => {
    this.setState({ mobileno: event.target.value });
  };



  handleSubmit = (event) => {
    event.preventDefault();
    //prevent browser fro auto refresh
    const users = { username: this.state.username, usr_password: this.state.usr_password, email: this.state.email, mobileno: this.state.mobileno };
    //  console.log(users)
    // const users = {this.state.username,usr_password,email,mobileno}

    axios
      .post("http://127.0.0.1:5001/add", { users },)
      .then((res) => {
        this.setState({ status: res.data });
        console.log(res.data)
        console.log(this.state.status)
        alert("registered succesfully")

      });
  };

  render() {
    return (
      <div class="container">
        { this.state.status === "success" ? <Redirect to="/Login" /> : null}
        <h2>Registration Form </h2>
        <form onSubmit={this.handleSubmit}>
          <div class="form-group">
            <label for="username">User Name:</label>
            <input type="text" class="form-control" id="username" placeholder="Enter username" name="username" onChange={this.handleChange1} />
          </div>
          <div class="form-group">
            <label for="pwd">Password:</label>
            <input type="password" class="form-control" id="usr_password" placeholder="Enter password" name="usr_password" onChange={this.handleChange2} />
          </div>
          <div class="form-group">
            <label for="confirm_password"> Confirm-Password:</label>
            <input type="password" class="form-control" id="confirm_password" placeholder="Enter password" name="confirm_password" onChange={this.handleChange3} />
          </div>
          <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" class="form-control" id="email" placeholder="Enter username" name="email" onChange={this.handleChange4} />
          </div>

          <div class="form-group">
            <label for="mobileno">Mobile No:</label>
            <input type="text" class="form-control" id="mobileno" placeholder="Enter username" name="mobileno" onChange={this.handleChange5} />
          </div>

          <button type="submit" class="btn btn-primary">Submit</button><br />
        </form><br />
      </div>
    );
  }
}