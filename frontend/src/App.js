import React from "react";
import { Switch } from "react-router-dom";
import "./App.css";
import LandingPage from "./features/landingPage/LandingPage";
import { AuthRoute, ProtectedRoute } from "./util/routeUtil";
import AuthProvider from "./providers/AuthContext";
import Home from "./features/home/Home";
import SignUp from "./features/signUp/SignUp";
import CompleteFeature from './features/MessagingFeature/CompleteFeature';
import Navbar from './features/navbar/Navbar'


import Chat from './features/MessagingFeature/Chat/Chat'
import Join from './features/MessagingFeature/Join/Join'

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Navbar/>
        <Switch>
          <AuthRoute exact path="/login">
            <LandingPage />
          </AuthRoute>

          <ProtectedRoute exact path="/home">
            <Home />
          </ProtectedRoute>

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
