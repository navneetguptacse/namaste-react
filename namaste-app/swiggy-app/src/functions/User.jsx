const User = ({ name, location }) => {
  return (
    <div className="card card-content">
      <h4>Name: {name}</h4>
      <h4>Location: {location}</h4>
      <h4>Contact: @navneetgupta</h4>
      <p>About: I'm a Software Engineer.</p>
    </div>
  );
};

export default User;
