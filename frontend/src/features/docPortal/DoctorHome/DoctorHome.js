import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authInfoState } from "../../authInfoSlice/authInfoSlice";
import { cloudLogout } from "../../../util/logoutFunctions";
import "../DoctorHome/doctorHome.css";
import { AuthContext } from "../../../providers/AuthContext";
import InAppDocNav from "../DoctorNav/inAppDocNav/InAppDocNav";
import { motion } from "framer-motion";
import proPic from "../../../images/accounts2.png";
import { messaging } from "firebase";

const DoctorHome = (props) => {
  const auth = useSelector(authInfoState);
  const dispatch = useDispatch();
  // const state = useSelector(authInfoState);
  const { currentUser } = useContext(AuthContext);

  const signOut = () => {
    dispatch(cloudLogout(currentUser.id));
  };

  return (
    <motion.div initial="initial" animate="in" exit="out">
      <div className="doctor-home">
        <div className="nav4docPort">
          <InAppDocNav />
        </div>

        <div className="welcome-doctor">
          <h2 className="helloDocGreeting">
            {" "}
            {currentUser
              ? `Hello Dr. ${auth.firstName} ${auth.lastName}`
              : ""}{" "}
          </h2>

          <div>
            <div id="menuId" className="outButtDiv">
              <img alt="" src={proPic} />
              <div onClick={signOut} className="outButtDiv-content">
                <p>Log Out</p>
              </div>
            </div>
          </div>

          <ul className="menu"></ul>
        </div>

        <div className="upcomingAppointments">
          <div>
            <h2 className="todayAptSign"> Today's Appointments </h2>
            <div className="listOfApptsForDay">
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
                <p className="answerInput">Dog</p>
                <label className="apptDisplayLabels"> Breed:</label>
                <p className="answerInput"> House Cat</p>

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
    </motion.div>
  );
};

export default DoctorHome;
