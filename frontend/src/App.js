import React from "react";
import { Switch } from "react-router-dom";
import "./App.css";
import LandingPage from "./features/landingPage/LandingPage";
import { AuthRoute, ProtectedRoute } from "./util/routeUtil";
import AuthProvider from "./providers/AuthContext";
import Home from "./features/home/Home";
import SignUp from "./features/signUp/SignUp";
import CalendarPage from "./features/calendar/Calendar";
import Nav from "./features/navBar/Nav";

function App() {
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

          <ProtectedRoute exact path="/calendar">
            <CalendarPage />
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
        </Switch>
      </div>
    </AuthProvider>
  );
}

export default App;
