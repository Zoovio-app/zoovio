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
import TaskForm from "./features/taskForm/TaskForm";
import Pets from "./features/pets/Pets";
import PetForm from "./features/petForm/PetForm";

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
