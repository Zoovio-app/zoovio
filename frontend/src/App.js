import React from "react";
import { Switch, useLocation } from "react-router-dom";
import "./App.css";
import LandingPage from "./features/landingPage/LandingPage";
import { AuthRoute, ProtectedRoute, DoctorAuthRoute, PrivateRoute } from "./util/routeUtil";
import AuthProvider from "./providers/AuthContext";
import Home from "./features/home/Home";
import SignUp from "./features/signUp/SignUp";
import CalendarPage from "./features/calendar/Calendar";
import Nav from "./features/navBar/Nav";
import { AnimatePresence } from "framer-motion";
import Tasks from "./features/calendar/tasks/Tasks";
import TaskForm from "./features/taskForm/TaskForm";
import Pets from "./features/pets/Pets";
import PetForm from "./features/petForm/PetForm";

// import Messaging from './features/messaging/Messaging/Messaging'
import DoctorHome from './features/docPortal/DoctorHome/DoctorHome';
import DoctorLogin from './features/docPortal/DoctorLogin/DoctorLogin';
import DoctorSignup from './features/docPortal/DoctorSignup/DoctorSignup';
import DoctorPortal from "./features/docPortal/DoctorPortal/DoctorPortal";
import DoctorInquire from './features/docPortal/DoctorInquire/DoctorInquire';
import VideoChat from './features/videoChat/videoChat';

import { useDispatch, useSelector } from 'react-redux';

function App() {
  const location = useLocation();
  return (
    <AuthProvider>
      <div className="App">
        <ProtectedRoute>
          <Nav />
        </ProtectedRoute>
        <Switch>
          <AuthRoute exact path="/login">
            <LandingPage />
          </AuthRoute>
          <ProtectedRoute exact path="/pets/create">
            <PetForm />
          </ProtectedRoute>

          <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
              <ProtectedRoute exact path="/home">
                <Home />
              </ProtectedRoute>

              <ProtectedRoute exact path="/pets">
                <Pets />
              </ProtectedRoute>

              <ProtectedRoute exact path="/calendar/tasks/:day">
                <Tasks />
              </ProtectedRoute>

              <ProtectedRoute exact path="/tasks/create">
                <TaskForm />
              </ProtectedRoute>

              <ProtectedRoute exact path="/calendar">
                <CalendarPage />
              </ProtectedRoute>

              {/* ----------doc portal-------------------- */}
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
          {/* <PrivateRoute exact path="/messaging">
            <Messaging/>
          </PrivateRoute> */}


          <DoctorAuthRoute exact path="/doctor/inquire">
            <DoctorInquire/>
          </DoctorAuthRoute>
        
          <PrivateRoute exact path="/doctor/virtual-appointment">
            <VideoChat/>
          </PrivateRoute>

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
