import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  clearUserInfo,
} from '../../../userInfo/userInfoSlice';
import { cloudLogout } from '../../actions/auth.actions';
import './doctorHome.css'
import DoctorNav from '../DoctorNav/DoctorNav'



const DoctorHome = (props) => {
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();
 

  const signOut = () => {
    // logOut();
    dispatch(cloudLogout(auth.uid));
  };


  return (
    <div className="doctor-home"> 
      <div> 
        <DoctorNav/>
      </div>
     
    
    <div className="welcome-doctor">
      <h2> Doctor's Portal</h2>
      <h3> {auth.authenticated ? `Hello Dr. ${auth.firstName} ${auth.lastName}` : ''} </h3>
        {/* <div>
          <button onClick={signOut}> Log Out</button>
        </div> */}

        <ul className="menu">

{/* {
  auth.authenticated ?
  <li>
    <Link to={'/'} onClick={() => {
      dispatch(cloudLogout(auth.uid))
    }}>Logout</Link>
</li> : null
} */}
 
</ul>
    </div>
    


  
  </div>
  );
}

export default DoctorHome;