import React, { useEffect} from "react";
import { Switch, useLocation, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./features/landingPage/LandingPage";
import { AuthRoute, ProtectedRoute, DoctorAuthRoute } from "./util/routeUtil";
import PrivateRoute from './features/docSRC/components/PrivRoutes';



import AuthProvider from "./providers/AuthContext";
import Home from "./features/home/Home";
import SignUp from "./features/signUp/SignUp";
import CalendarPage from "./features/calendar/Calendar";
// import Nav from "./features/navBar/Nav";
import { AnimatePresence } from "framer-motion";
import Tasks from "./features/calendar/tasks/Tasks";
import DoctorMessaging from './features/docSRC/docPortal/DoctorMessaging/DoctorMessaging';
import DoctorHome from './features/docSRC/docPortal/DoctorHome/DoctorHome';
import DoctorLogin from './features/docSRC/docPortal/DoctorLogin/DoctorLogin';
import DoctorSignup from './features/docSRC/docPortal/DoctorSignup/DoctorSignup';
import DoctorPortal from "./features/docSRC/docPortal/DoctorPortal/DoctorPortal";
// import 'bootstrap/dist/css/bootstrap.min.css'
import { useDispatch, useSelector } from 'react-redux';
import { isLoggedInUser } from './features/docSRC/actions';
// import { auth, firestore } from 'firebase';
import {
  updateUserInfo,
  userInfoState,
  clearUserInfo,
} from './features/userInfo/userInfoSlice';
// import { auth } from 'firebase/firestore'


function App() {
  const location = useLocation();
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch()


  // useEffect(() => {
  //   if(!auth.authenticated){
  //     dispatch(isLoggedInUser())
  //   }
  // }, []);

  return (
    <AuthProvider>
      <div className="App">
        {/* <ProtectedRoute>
          <Nav />
        </ProtectedRoute> */}
        <Switch>

          <AuthRoute exact path="/login">
            <LandingPage />
          </AuthRoute>

          <ProtectedRoute exact path="/home">
            <Home />
          </ProtectedRoute>

          <DoctorAuthRoute exact path="/doctor/portal">
            <DoctorPortal/>

          </DoctorAuthRoute>

          <PrivateRoute exact path="/doctor/home">
            <DoctorHome/>
          </PrivateRoute>


          <DoctorAuthRoute exact path="/doctor/signup">
            <DoctorSignup/>
          </DoctorAuthRoute>


          <DoctorAuthRoute exact path="/doctor/login">
            <DoctorLogin/>
          </DoctorAuthRoute>
          {/* ------------------- */}
          <PrivateRoute exact path="/messaging">
            <DoctorMessaging/>
          </PrivateRoute>

          <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
              <ProtectedRoute exact path="/calendar/tasks">
                <Tasks />
              </ProtectedRoute>

              <ProtectedRoute exact path="/calendar">
                <CalendarPage />
              </ProtectedRoute>
            </Switch>
          </AnimatePresence>

          <AuthRoute exact path="/">
            <LandingPage />
          </AuthRoute>

          <AuthRoute exact path="/signup">
            <SignUp />
          </AuthRoute>

          <AuthRoute path="*">
            <LandingPage />
          </AuthRoute>
        </Switch>
      </div>
    </AuthProvider>
  );
}

export default App;
