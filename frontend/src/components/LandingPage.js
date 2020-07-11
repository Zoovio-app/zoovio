import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import axios from 'axios';


const LandingPage = () => {
    const [displyName, setDisplyName] = useState("");
    const [Form,setShowForm] = useState(false)
    const [signUpForm, setsignUpForm] = useState(false)
    const history = useHistory()
    

  const handleLogInClick = () =>  {
        console.log(Form)
        setShowForm(!Form)
    }
    const handleSignUpClick = () =>  {
        console.log(signUpForm)
        setsignUpForm(!signUpForm)
    }
    const HandleLogin = () => {

    }

  const login = ()=>{
        return <div className="login-info">
            <form id="loginForm" onSubmit={handleLogin}>
                <input name="display_name" placeholder="username"></input>
                {/* <input name="password" type="password" placeholder="password"></input> */}
                <button type="submit">submit</button>
            </form>
        
        </div>
    }
    return(
        <div>
        <div id="rightBanner">
         <button id="logIN" onClick={handleLogInClick}>Login</button>
         <p>Don't have an account? get started!</p> <button id="signUp">Signup</button>

        </div>
        
        <form>
        

        </form>
         {Form?login():null}
        {signUpForm?signup():null}
        </div>
    )
}

export default LandingPage