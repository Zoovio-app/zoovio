import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  authInfoState,
} from '../../authInfoSlice/authInfoSlice';
import { cloudLogout } from '../../../util/logoutFunctions';
import './doctorHome.css'
import DoctorNav from '../DoctorNav/DoctorNav';
import { AuthContext } from '../../../providers/AuthContext';



const DoctorHome = (props) => {
  const auth = useSelector(authInfoState);
  const dispatch = useDispatch();
  // const state = useSelector(authInfoState);
  const { currentUser } = useContext(AuthContext);
 
  console.log(currentUser)
  const signOut = () => {
    dispatch(cloudLogout(currentUser.id));
  };


  return (
    <div className="doctor-home"> 
      <div> 
        <DoctorNav/>
      </div>
     
    
    <div className="welcome-doctor">
      <h2> Doctor's Portal</h2>

    
      <h3> {auth.authenticated ? `Hello Dr. ${auth.firstName} ${auth.lastName}` : ''} </h3>
        <div>
          <button onClick={signOut}> Log Out</button>
        </div>
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