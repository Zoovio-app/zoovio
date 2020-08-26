import React, { useState } from "react";
import { demoLogin, userLogin } from "../../util/loginFunctions.js";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Button, FormGroup, FormControl } from 'react-bootstrap';


const LandingPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  return (
    <div className="landingInfo">
    {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f18e7c" fill-opacity="1" d="M0,288L80,288C160,288,320,288,480,261.3C640,235,800,181,960,170.7C1120,160,1280,192,1360,208L1440,224L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg> */}
      <h1>ZooVio</h1>
      <div className="formContainer">
      <div>
        <img class=" ls-is-cached lazyloaded" src="https://storytale.io/wp-content/uploads/2020/04/vesta-10-animal-care.png" data-src="https://storytale.io/wp-content/uploads/2020/04/vesta-10-animal-care.png" alt=""></img>
      </div>
        <form>
          <FormGroup
            onSubmit={(e) => dispatch(userLogin(e, email, password))}
            controlId="primaryForm"
          >
          <Button bsStyle="primary" onClick={demoLogin}>Demo Login</Button>
            <FormControl
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email"
            ></FormControl>
            <FormControl
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="password"
            ></FormControl>
            <Button bsStyle="primary" type="submit">Log In</Button>
          </FormGroup>
        </form>
      </div>
      <p>Don't have an account? <Link to="/signup">Get started!</Link></p>
      {/* <img class=" ls-is-cached lazyloaded" src="https://storytale.io/wp-content/uploads/2020/04/vesta-10-animal-care.png" data-src="https://storytale.io/wp-content/uploads/2020/04/vesta-10-animal-care.png" alt=""></img> */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f18e7c" fill-opacity="1" d="M0,64L80,96C160,128,320,192,480,192C640,192,800,128,960,101.3C1120,75,1280,85,1360,90.7L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
    </div>
  );
};

export default LandingPage;
