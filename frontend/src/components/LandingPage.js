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
    const Login = () => {

    }

    return(
        <form>
        

        </form>
    )
}

export default LandingPage