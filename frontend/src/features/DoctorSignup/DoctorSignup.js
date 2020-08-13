import React, { useState } from 'react';
import { cloudSignup } from '../../actions';
import { useDispatch, useSelector } from 'react-redux';
// import { Redirect } from 'react-router-dom';


const DoctorSignup = (props) => {


  const [ firstName, setFirstName ] = useState('');
  const [ lastName, setLastName ] = useState('');
  const [ companyName, setCompanyName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);


  const registerUser = (e) => {
    
    e.preventDefault();

    const user = {
      companyName, firstName, lastName, email, password
    }
    
    dispatch(cloudSignup(user))
  }


  // if(auth.authenticated){
  //   return <Redirect to={`/doctor/home`} />
  // }

  return(
    
      <div className="registerContainer">
      
          <form onSubmit={registerUser}>

            <h3>Sign up</h3>

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

            <input 
              name="companyName"
              type="text"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              placeholder="Company Name"
            />

            <input 
              name="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
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

export default DoctorSignup