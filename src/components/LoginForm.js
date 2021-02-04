import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    console.log(this.state);
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          this.state.username !== "" && this.state.password !== ""
            ? this.props.handleLogin(e, this.state)
            : console.log("nope");
        }}
      >
        <div>
          <label>
            Username
            <input
              onChange={this.handleChange}
              id="username"
              name="username"
              type="text"
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              onChange={this.handleChange}
              id="password"
              name="password"
              type="password"
            />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
