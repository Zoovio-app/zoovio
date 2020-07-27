import React from "react";
import { Switch, useLocation } from "react-router-dom";
import "./App.css";
import LandingPage from "./features/landingPage/LandingPage";
import { AuthRoute, ProtectedRoute } from "./util/routeUtil";
import AuthProvider from "./providers/AuthContext";
import Home from "./features/home/Home";
import SignUp from "./features/signUp/SignUp";
import Upload from "./features/upload/Upload";
import CompleteFeature from './features/MessagingFeature/CompleteFeature';
import Chat from './features/MessagingFeature/Chat/Chat'
import Join from './features/MessagingFeature/Join/Join'



import CalendarPage from "./features/calendar/Calendar";
import Nav from "./features/navbar/Nav";
import { AnimatePresence } from "framer-motion";
import Tasks from "./features/calendar/tasks/Tasks";

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

          <ProtectedRoute exact path="/home">
            <Home />
          </ProtectedRoute>

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

          <ProtectedRoute exact path="/messages">
            <CompleteFeature/>
          </ProtectedRoute>

          <ProtectedRoute path="/chat">
            <Chat/>
          </ProtectedRoute>

          <ProtectedRoute exact path="/upload">
            <Upload/>
          </ProtectedRoute>
          
          <ProtectedRoute exact path="/join">
            <Join/>
          </ProtectedRoute>



          <AuthRoute path="*">
            <LandingPage />
          </AuthRoute>


        </Switch>
      </div>
    </AuthProvider>
  );
}

export default App;
