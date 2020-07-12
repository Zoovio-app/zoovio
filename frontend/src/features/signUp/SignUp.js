import React, { useState } from 'react';
import axios from 'axios';
import { NavLink, useHistory } from 'react-router-dom';
import { signUp } from '../../util/firebaseFunctions';
import { apiURL } from '../../util/apiURL';

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [full_name, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const history = useHistory();
  const API = apiURL();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        let res = await signUp(email, password);
        await axios.post(`${API}/users/`, { id: res.user.uid, username, password, full_name, email }); 
        sessionStorage.loggedUser = res.user.uid
        history.push("/home")
    } catch (err) {
        console.log(err);
    }
  }

  return (
    <div className="signUp">
        <div className="topDiv">
            <form className="signUpForm" onSubmit={handleSubmit}>
                <input className="signup_input" type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email} />
                <input className="signup_input" type="text" placeholder="Full Name" onChange={(e) => setFullname(e.target.value)} value={full_name} />
                <input className="signup_input" type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} value={username} />
                <input className="signup_input" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} autoComplete="on" />
                <button className="signUp_button" type="submit">Sign Up</button>
            </form>
        </div>
        <div className="bottomDiv">
            <nav className="midNav">
                Have an account?
                <NavLink className="login" exact to={"/"}> Log in</NavLink>
            </nav>
        </div>
    </div>
  );
};

export default SignUp;