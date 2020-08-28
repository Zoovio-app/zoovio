import React from "react";
import { Switch, useLocation, Route } from "react-router-dom";
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
// import SvgWave from "./features/svgWaves/SvgWave";
import SplashPage from "./features/splashpage/SplashPage";
import UserMenue from "./features/userMenue/UserMenue";

function App() {
  const location = useLocation();

  return (
    <AuthProvider>
      <div className="App">
        <div className="appCont">
          {/* <Route path={["/home", "/calendar", "/pets", "/tasks/create"]}>
            <SvgWave />
          </Route> */}
          <Switch>
            <AuthRoute exact path="/">
              <SplashPage />
            </AuthRoute>

            <AuthRoute exact path="/signup">
              <SignUp />
            </AuthRoute>

            <AuthRoute exact path="/login">
              <LandingPage />
            </AuthRoute>
            <ProtectedRoute exact path="/pets/create">
              <PetForm />
            </ProtectedRoute>
            <>
              <div className="inAppContent">
                <UserMenue />

                <AnimatePresence exitBeforeEnter>
                  <Switch location={location} key={location.pathname}>
                    <ProtectedRoute exact path="/home">
                      {/* <Home /> */}
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

                    <AuthRoute path="*">
                      <LandingPage />
                    </AuthRoute>
                  </Switch>
                </AnimatePresence>
                <Route path={["/home", "/pets", "/calendar", "/tasks"]}>
                  <Nav />
                </Route>
              </div>
            </>

            <AuthRoute path="*">
              <LandingPage />
            </AuthRoute>
          </Switch>
        </div>
      </div>
    </AuthProvider>
  );
}

export default App;
