import React from "react";

class Toggle extends React.Component {
    constructor(props) {
      super(props);
      this.state = {isToggleOn: true};
  
      // // This binding is necessary to make `this` work in the callback
      // this.handleClick = this.handleClick.bind(this);
      // this.clickOn = this.clickOn.bind(this);
    }

    // handleClick() {
    handleClick = () => {
      this.setState(prevState => ({
        isToggleOn: !prevState.isToggleOn
      }));
    }

    clickOn = () => {
        alert("Click on");
    }
  
    render() {
      return (
        <div>
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
            <br />
            <button onClick={this.clickOn}>
                Click
            </button>
        </div>
      );
    }
}

function Form() {
    function handleSubmit(e) {
      e.preventDefault();
      alert('You clicked submit.');
      console.log('You clicked submit.');
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <button type="submit">Submit</button>
      </form>
    );
  }

class LoginControl extends React.Component {
    constructor(props) {
      super(props);
      this.handleLoginClick = this.handleLoginClick.bind(this);
      this.handleLogoutClick = this.handleLogoutClick.bind(this);
      this.state = {isLoggedIn: false};
    }
  
    handleLoginClick() {
      this.setState({isLoggedIn: true});
    }
  
    handleLogoutClick() {
      this.setState({isLoggedIn: false});
    }
  
    render() {
      const isLoggedIn = this.state.isLoggedIn;
      let button;
      if (isLoggedIn) {
        button = <LogoutButton onClick={this.handleLogoutClick} />;
      } else {
        button = <LoginButton onClick={this.handleLoginClick} />;
      }
  
      return (
        <div>
          <Greeting isLoggedIn={isLoggedIn} />
          {button}
        </div>
      );
    }
  }

  function UserGreeting(props) {
    return <h1>Welcome back!</h1>;
  }
  
  function GuestGreeting(props) {
    return <h1>Please sign upp.</h1>;
  }
  
  function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
      return <UserGreeting />;
    }
    return <GuestGreeting />;
  }
  
  function LoginButton(props) {
    return (
      <button onClick={props.onClick}>
        Login
      </button>
    );
  }
  
  function LogoutButton(props) {
    return (
      <button onClick={props.onClick}>
        Logout
      </button>
    );
  }

export {Toggle, Form, LoginControl};