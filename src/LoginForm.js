import React from "react";

class LoginForm extends React.Component {
  onSubmit = () => {
    this.props.history.push("/");
  };
  render() {
    console.log(this.props);

    return (
      <form>
        <input placeholder="name" type="name" />
        <input placeholder="email" type="email" />
        <button onClick={this.onSubmit}>Submit</button>
      </form>
    );
  }
}
export default LoginForm;
