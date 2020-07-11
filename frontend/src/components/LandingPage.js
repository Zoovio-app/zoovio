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
    const handleLogin = async(e) => {
        e.preventDefault()
        let display_name = e.target.display_name.value
        
        try{
        let res = await axios.get()
        let user=res.data.body.searchUser
            if(user.length){
                history.push()
            }else{
                alert("fail")
            }
        }catch(error){
            console.log(error);
        }
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
        <h1>ZooVio</h1>
         {Form?login():null}
        {/* {signUpForm?signup():null} */}
        </div>
    )
}

export default LandingPage