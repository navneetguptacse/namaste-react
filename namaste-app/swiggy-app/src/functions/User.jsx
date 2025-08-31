import { useState } from "react";

const User = ({ name, location }) => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

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
      <button onClick={() => setCount(count + 1)}>Click (function)</button>
      <button onClick={() => setCount2(count2 + 2)}>Click2 (function)</button>
      <hr />
      <button
        onClick={() => {
          setCount(0);
          setCount2(0);
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default User;
