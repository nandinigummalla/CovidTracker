import React from "react";
import axios from "axios";
import { Redirect } from 'react-router-dom';
export default class Login extends React.Component {
  state = {
    username: " ",
    pwd: " ",
    status: " ",


  };

  handleChange1 = (event) => {
    this.setState({ username: event.target.value });
  };
  handleChange2 = (event) => {
    this.setState({ pwd: event.target.value });
  };


  handleSubmit = (event) => {
    //prevent browser fro auto refresh
    event.preventDefault();
    const users = { username: this.state.username, pwd: this.state.pwd };
    // console.log(user)


    axios
      .post("http://127.0.0.1:5000/login", { users })
      .then((res) => {
        console.log(res.data)
        this.setState({ status: res.data });

        console.log(this.state.status)
      })
      .catch((error) => {
        console.log(error);

      })

  };

  render() {
    return (

      <div class="container">
        {/* { this.state.status ==="login success" ? <PostData/> : null } */}
        { this.state.status === "login success" ? <Redirect to="/Mail_DataFetch" /> : null}


        <h2>{this.state.status}</h2>
        <h2>Login Form </h2>
        <form onSubmit={this.handleSubmit} >
          <div class="form-group">
            <label for="email">User Name:</label>
            <input type="text" class="form-control" id="username" placeholder="Enter username" name="username" onChange={this.handleChange1} />
          </div>
          <div class="form-group">
            <label for="pwd">Password:</label>
            <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pwd" onChange={this.handleChange2} />
          </div>

          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
        <br />
        <p class="change_link">
          To Register !!
                <a href="/Registration" class="to_register"> Click Here </a>
        </p>
      </div>
    );
  }
}