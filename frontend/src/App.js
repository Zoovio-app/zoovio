import React from "react";
import { Switch, useLocation } from "react-router-dom";
import "./App.css";
import LandingPage from "./features/landingPage/LandingPage";
import { AuthRoute, ProtectedRoute } from "./util/routeUtil";
import AuthProvider from "./providers/AuthContext";
import Home from "./features/home/Home";
import SignUp from "./features/signUp/SignUp";
import CalendarPage from "./features/calendar/Calendar";
import Nav from "./features/navBar/Nav";
import { AnimatePresence } from "framer-motion";
import Tasks from "./features/calendar/tasks/Tasks";
import VetSearch from "./features/search/VetSearch"
import TaskForm from "./features/taskForm/TaskForm";
import YelpSearch from "./features/search/SearchBar"
import "bulma/css/bulma.css"

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

          <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
              <ProtectedRoute exact path="/home">
                <Home />
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

              <ProtectedRoute exact path="/search">
                <YelpSearch />
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
