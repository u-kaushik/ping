import React from "react";
import "../../../sass/components/Input.scss";

const initialState = {
  email: "",
  emailError: "",
};

export default class Input extends React.Component {
  state = initialState;

  handleChange = (e) => {
    const isCheckbox = e.target.type === "checkbox";
    this.setState({
      [e.target.name]: isCheckbox ? e.target.checked : e.target.value,
    });
  };

  validate = () => {
    let emailError = "";

    if (!this.state.email.includes("@")) {
      emailError = "Please provide a valid email address";
      this.setState({
        inputClass: "invalid",
      });
    } else {
      this.setState({
        inputClass: "valid",
      });
    }
    if (emailError) {
      this.setState({ emailError });
      return false;
    }

    return true;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      this.setState(initialState);
    }
  };

  render() {
    return (
      <form className="input-form" onSubmit={this.handleSubmit}>
        <div className="input-form-div">
          <input
            className={`${this.state.inputClass} input`}
            placeholder="Your email address..."
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />
          <button className="button" type="submit">
            Notify Me
          </button>
          <div className="email-error">{this.state.emailError}</div>
        </div>
      </form>
    );
  }
}
