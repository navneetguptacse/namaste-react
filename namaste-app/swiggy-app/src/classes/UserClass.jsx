import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    const { name, location } = this.props;
    return (
      <div className="card card-content">
        <h4>Name: {name}</h4>
        <h4>Location: {location}</h4>
        <h4>Contact: @navneetgupta</h4>
        <p>About: I'm a Software Engineer.</p>
      </div>
    );
  }
}

export default UserClass;
