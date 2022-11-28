import React from "react";

// function Tick(pros) {
//     return (
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>It is {pros.date.toLocaleTimeString()} .</h2>
//       </div>
//     );
// }

// export default Tick

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  // componentWillUpdate() {
  //   console.log("before re-render");
  // }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
    console.log("render");
  }

  // componentDidUpdate() {
  //   console.log("update");
  // }

  componentWillUnmount() {
    clearInterval(this.timerID);
    console.log("unmount tick");
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, {this.props.name}</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

export default Clock


