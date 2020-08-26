import React, { useState } from 'react';
import { cloudSignup } from '../../actions';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import './docInquire.css';
import zoovioDocPet from '../../../../assets/img/zoovioDocPet.png'




const DoctorInquire = (props) => {
    const [ fullName, setFullName ] = useState('');
    const [ lastName, setLastName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ phoneNumber, setPhoneNumber ] = useState('');
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);


      // if(authenticated){
      //   history.push("/doctor/home")
      //   // return <Redirect to={`/doctor/home`} />
      // }


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
            <form className="docSignupForm">
              <h2 className="welcomeSignup">Inquire About ZooVio</h2>


              <div className="inputDiv2 two">
                <div class="i2">
                  <i class="fas fa-user"></i>
                </div>
                <div class="div">
                  <h5>Name:</h5>
                  <input 
                    name="fullName"
                    type="text"
                    // value={fullName}
                    // onChange={(e) => setFullName(e.target.value)}
                    placeholder="Full Name"
                    />
                </div>
              </div>

              <div className="inputDiv2 two">
                <div class="i2">
                  <i class="fas fa-user"></i>
                </div>
                <div class="div">
                  <h5>Clinic:</h5>
                  <input 
                    name="company"
                    type="text"
                    // value={company}
                    // onChange={(e) => setCompany(e.target.value)}
                    placeholder="Veterinary Clinic / Hospital"
                    />
                </div>
              </div>

              

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

        
              <div className="inputDiv2 three">
                <div class="i2">
                  <i class="fas fa-user"></i>
                </div>
                <div class="div">
                  <h5>Inquiry:</h5>
                  <input 
                    name="inquiry"
                    type="textarea"
                    // value={company}
                    // onChange={(e) => setCompany(e.target.value)}
                    placeholder="Ask about our servies"
                    />
                </div>
              </div>


            <div>
              <button className="docSignupBtn"> Submit Inquiry</button>
            </div>

            </form>
            </div>

        </div>
    )

}



export default DoctorInquire;