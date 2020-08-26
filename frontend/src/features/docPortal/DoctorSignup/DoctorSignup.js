import React, { useState } from 'react';
import { cloudSignup } from '../../actions';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";


const DoctorSignup = (props) => {
    const [ firstName, setFirstName ] = useState('');
    const [ lastName, setLastName ] = useState('');
    // const [ companyName, setCompanyName ] = useState('');
    const [ email, setEmail ] = useState('');
    // const [ userType, setUserType ] = useState('');
    const [ phoneNumber, setPhoneNumber ] = useState('');
    const [ password, setPassword ] = useState('');
    const history = useHistory();
    
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);

    const registerUser = (e) => {
        e.preventDefault();
        const user = {
          /*companyName,*/ firstName, lastName, email, /*userType,*/ phoneNumber, password
        }
        dispatch(cloudSignup(user))
      }

      // if(authenticated){
      //   history.push("/doctor/home")
      //   // return <Redirect to={`/doctor/home`} />
      // }


    return (
        <div className="doctorRegistrationContainer">
            <form onSubmit={registerUser}>

            <h3>Sign Up Today</h3>

            <input 
              name="firstName"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First Name"
            />

            <input 
              name="lastName"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last Name"
            />

            {/* <input 
              name="companyName"
              type="text"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              placeholder="Company Name"
            /> */}

            <input 
              name="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />

            {/* <input 
              name="userType"
              type="radio"
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
              placeholder="Doctor?"
            /> */}

            {/* <input 
              name="userType"
              type="radio"
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
              placeholder="Pet Owner?"
            /> */}

            <input 
              name="phoneNumber"
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="Phone Number"
            />

            <input 
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />


            <div>
              <button>Sign up</button>
            </div>

            </form>

        </div>
    )
}


export default DoctorSignup;