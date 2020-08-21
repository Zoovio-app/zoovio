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
        <div
          style={{
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            // justifyContent: "spaceBetween",
          }}
        >
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#f16643"
                fill-opacity="1"
                d="M0,192L60,181.3C120,171,240,149,360,122.7C480,96,600,64,720,53.3C840,43,960,53,1080,69.3C1200,85,1320,107,1380,117.3L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
              ></path>
            </svg>
          </div>

          <Switch>
            <AuthRoute exact path="/login">
              <LandingPage />
            </AuthRoute>
            <ProtectedRoute exact path="/pets/create">
              <PetForm />
            </ProtectedRoute>
            <div
              style={{
                marginTop: " -275px",
                display: "flex",
                justifyContent: "center",
                height: "60vh",
              }}
            >
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
            </div>
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
          <ProtectedRoute>
            <Nav />
          </ProtectedRoute>
        </div>
      </div>
    </AuthProvider>
  );
}

export default App;
