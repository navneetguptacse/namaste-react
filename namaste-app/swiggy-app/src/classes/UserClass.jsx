import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0, count2: 0 };
  }
  render() {
    const { name, location } = this.props;
    const { count, count2 } = this.state;
    return (
      <div className="card card-content">
        <h4>Name: {name}</h4>
        <h4>Location: {location}</h4>
        <h4>Contact: @navneetgupta</h4>
        <p>About: I'm a Software Engineer.</p>
        <hr />
        <h4>
          Count: {count} and Count2: {count2}
        </h4>
        <button
          onClick={() => {
            this.setState({ count: count + 1 });
          }}
        >
          Click (class)
        </button>
        <button
          onClick={() => {
            this.setState({ count2: count2 + 2 });
          }}
        >
          Click2 (class)
        </button>
        <hr />
        <button
          onClick={() => {
            this.setState({ count: 0, count2: 0 });
          }}
        >
          Reset
        </button>
      </div>
    );
  }
}

export default UserClass;
