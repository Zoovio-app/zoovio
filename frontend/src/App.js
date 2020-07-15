import React from "react";
import { Switch } from "react-router-dom";
import "./App.css";
import LandingPage from "./features/landingPage/LandingPage";
import { AuthRoute, ProtectedRoute } from "./util/routeUtil";
import AuthProvider from "./providers/AuthContext";
import Home from "./features/home/Home";
import SignUp from "./features/signUp/SignUp";
import Messages from './features/messages/Messages';

function App() {
  return (
    <AuthProvider>
      <div className="App">
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

          <AuthRoute path="*">
            <LandingPage />
          </AuthRoute>

          <ProtectedRoute exact path="/messages">
            <Messages/>
          </ProtectedRoute>

        </Switch>
      </div>
    </AuthProvider>
  );
}

export default App;
