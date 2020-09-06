import React, { useState } from 'react';
// import { cloudSignup } from '../../../util/loginFunctions';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import zoovioDocPet from '../../../assets/img/zoovioDocPet.png'
import './docSignup.css';




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
        // dispatch(cloudSignup(user))
      }


    return (
        <div className="doctorRegistrationContainer">

          <div className="navBar4DocPortal">
                <ul className="docPortalNavUl">
                    <li className="docPortalNavLiLeft"><a className="syleA" href="/doctor/portal">ZooVio</a></li>
                    <li className="docPortalNavLiRight"><a className="syleA" href="/doctor/inquire">Inquire</a></li>
                    <li className="docPortalNavLiRight"><a className="syleA" href="/doctor/signup">Signup</a></li>
                    <li className="docPortalNavLiRight"><a className="syleA" href="/doctor/login">Login</a></li>
                    <li className="docPortalNavLiRight"><a className="syleA" href="/about">About</a></li>
                </ul>
            </div>

            <div className= "zoovioMain4img2"> 
                <img className="zoovioImage2" src={zoovioDocPet}/>
            </div>


            <div className="docSignupFormMain">
            <form className="docSignupForm" onSubmit={registerUser}>
              <h2 className="welcomeSignup">Sign Up Today</h2>


              <div className="inputDiv2 two">
                <div class="i2">
                  <i class="fas fa-user"></i>
                </div>
                <div class="div">
                  <h5>First Name:</h5>
                  <input 
                    name="firstName"
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="First Name"
                    />
                </div>
              </div>

              <div className="inputDiv2 two">
                <div class="i2">
                  <i class="fas fa-user"></i>
                </div>
                <div class="div">
                  <h5>Last Name:</h5>
                  <input 
                    name="lastName"
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Last Name"
                    />
                </div>
              </div>

            {/* <input 
              name="companyName"
              type="text"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              placeholder="Company Name"
            /> */}

            <div className="inputDiv2 two">
                <div class="i2">
                  <i class="fas fa-user"></i>
                </div>
                <div class="div">
                  <h5>Email:</h5>
                  <input 
                    name="email"
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    />
                </div>
              </div>

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

            <div className="inputDiv2 two">
                <div class="i2">
                  <i class="fas fa-user"></i>
                </div>
                <div class="div">
                  <h5>Number:</h5>
                  <input 
                    name="phoneNumber"
                    type="text"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="Contact Number"
                    />
                </div>
              </div>

        
              <div className="inputDiv2 pass2">
                <div class="i2"> 
                  <i class="fas fa-lock"></i>
                </div>
                <div class="div">
                  <h5>Password:</h5>
                  <input 
                    name="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                    />
                  </div>
                </div>

                <div className="inputDiv2 pass2">
                <div class="i2"> 
                  <i class="fas fa-lock"></i>
                </div>
                <div class="div">
                  <h5>Token:</h5>
                  <input 
                    name="token"
                    type="password"
                    // value={token}
                    // onChange={(e) => setToken(e.target.value)}
                    placeholder="Token is provided by ZooVio"
                    required
                    />
                  </div>
                </div>

            <div>
              <button className="docSignupBtn"> Sign up</button>
            </div>

            </form>
            </div>

        </div>
    )

}



export default DoctorSignup;