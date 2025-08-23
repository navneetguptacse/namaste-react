import React, { useEffect, useState } from "react";

const Hooks = () => {
  const [value, setValue] = useState(0);

  // When no dep. array here -> useEffect() is called on every render
  // useEffect(() => {
  //   console.log("useEffect() called..");
  // });

  // When empty dep. array -> useEffect() is called once on first render only
  // useEffect(() => {
  //   console.log("useEffect() called..");
  // }, []);

  // When we pass a dep. array(not empty) -> it get render whenever this dep. array get chnaged.
  // e.g. here this useEffect() gets called whenever value gets changes.
  useEffect(() => {
    console.log("useEffect() called..");
  }, [value]);

  return (
    <div>
      <h2>Hi there!</h2>
      <button onClick={(e) => setValue(value - 1)}>-</button>
      <p>{value}</p>
      <button onClick={(e) => setValue(value + 1)}>+</button>
    </div>
  );
};

export default Hooks;
