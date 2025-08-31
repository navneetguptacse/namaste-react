import UserClass from "../classes/UserClass";
import User from "../functions/User";

const About = () => {
  return (
    <div>
      <h2>About Page</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
        voluptatibus.
      </p>
      <User
        name={"Navneet Gupta (function)"}
        location={"Bengaluru, India (function)"}
      />
      <UserClass
        name={"Navneet Gupta (class)"}
        location={"Bengaluru, India (class)"}
      />
    </div>
  );
};

export default About;
