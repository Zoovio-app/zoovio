import React, { useLayoutEffect, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  // USER_LOGIN,
  authInfoState,
  // USER_LOGOUT,
} from '../../slices/authInfoSlice';
import { cloudLogout } from '../../../../util/logoutFunctions';
import './doctorHome.css'
import DoctorNav from '../DoctorNav/DoctorNav';
import { AuthContext } from '../../../../providers/AuthContext';



const DoctorHome = (props) => {
  const auth = useSelector(authInfoState);
  const dispatch = useDispatch();
  // const state = useSelector(authInfoState);
  const { currentUser } = useContext(AuthContext);
 

  // // redux toolkit
  console.log(currentUser)
  const signOut = () => {
    dispatch(cloudLogout(currentUser.id));

  };


  return (
    <div className="doctor-home"> 
      <div className="nav4docPort"> 
        <DoctorNav/>
      </div>
     
    <div className="welcome-doctor">
      {/* <h2> Doctor's Portal</h2> */}
      {/* or since we declared auth as state*/}
      <h2 className="helloDocGreeting"> {currentUser ? `Hello Dr. ${auth.firstName} ${auth.lastName}` : ''} </h2>
      {/* auth */}
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


    <div className="upcomingAppointments">
      <div>
        <h2 className="todayAptSign"> Today's Appointments </h2>

          <div className="listOfApptsForDay">

            <div className="apptOne"> 
              <label className="apptDisplayLabels" for="checkupType"> Type: </label>
                <p className="answerInput"> Bi-yearly Check-up</p>
              <label className="apptDisplayLabels" id="checkupType"> Time: </label>
                <p className="answerInput"> 9:30 AM</p>
              <label className="apptDisplayLabels"> Owner: </label>
                <p className="answerInput"> Ohidur Rahman </p>
              <label className="apptDisplayLabels"> Pet: </label>
                <p className="answerInput"> Roco </p>
              <label className="apptDisplayLabels"> Type:</label>
                <p className="answerInput"> Bird</p>
              <label className="apptDisplayLabels"> Breed:</label>
                <p className="answerInput"> Eagle</p>

                <div className="aptBtns">
                  <button className="cancelApt"> Cancel</button>
                  <button className="rescheduleApt"> Reschedule</button>
                  <button className="followupApt"> Follow-Up</button>
                </div>
            </div>

            <div className="apptTwo"> 
              <label className="apptDisplayLabels"> Type: </label>
                <p className="answerInput"> Yearly Check-up</p>
              <label className="apptDisplayLabels"> Time: </label>
                <p className="answerInput"> 11:00 AM</p>
              <label className="apptDisplayLabels"> Owner: </label>
                <p className="answerInput"> Samantha Jiminez </p>
              <label className="apptDisplayLabels"> Pet: </label>
                <p className="answerInput"> Kitty </p>
              <label className="apptDisplayLabels"> Type:</label>
                <p className="answerInput"> Cat</p>
              <label className="apptDisplayLabels"> Breed:</label>
                <p className="answerInput"> House Cat</p>

                <div className="aptBtns">
                  <button className="cancelApt"> Cancel</button>
                  <button className="rescheduleApt"> Reschedule</button>
                  <button className="followupApt"> Follow-Up</button>
                </div>
            </div>

            <div className="apptThree"> 
              <label className="apptDisplayLabels"> Type: </label>
                <p className="answerInput"> Emergency </p>
              <label className="apptDisplayLabels"> Time: </label>
                <p className="answerInput"> 1:00 PM</p>
              <label className="apptDisplayLabels"> Owner: </label>
                <p className="answerInput"> Danny Laurent </p>
              <label className="apptDisplayLabels"> Pet: </label>
                <p className="answerInput"> Genesis </p>
              <label className="apptDisplayLabels"> Type:</label>
                <p className="answerInput"> Cat</p>
              <label className="apptDisplayLabels"> Breed:</label>
              <p className="answerInput"> Tiger</p>

              <div className="aptBtns">
                  <button className="cancelApt"> Cancel</button>
                  <button className="rescheduleApt"> Reschedule</button>
                  <button className="followupApt"> Follow-Up</button>
                </div>
            </div>

            <div className="apptFour"> 
              <label className="apptDisplayLabels"> Type: </label>
              <p className="answerInput"> Walk-In </p>

              <label className="apptDisplayLabels"> Time: </label>
              <p className="answerInput"> 4:00 PM</p>

              <label className="apptDisplayLabels"> Owner: </label>
              <p className="answerInput"> Uduakabasi Abasiurua </p>

              <label className="apptDisplayLabels"> Pet: </label>
              <p className="answerInput"> Lola </p>

              <label className="apptDisplayLabels"> Type:</label>
              <p className="answerInput"> Dog </p>

              <label className="apptDisplayLabels"> Breed:</label>
              <p className="answerInput"> Pitbull</p>

                <div className="aptBtns">
                  <button className="cancelApt"> Cancel</button>
                  <button className="rescheduleApt"> Reschedule</button>
                  <button className="followupApt"> Follow-Up</button>
                </div>
            </div>



        
          </div>




      </div>

      

    </div>
    


  
  </div>
  );
}

export default DoctorHome;