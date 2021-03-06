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
import SplashPage from "./features/splashpage/SplashPage";
import UserMenue from "./features/userMenue/UserMenue";
import Search from "./features/search/Search";
import Blob from "./features/blob/Blob.js";
import DoctorsApp from "./features/docPortal/DoctorsApp";
import UserMessages from "./features/userMessages/UserMessages";

function App() {
  const location = useLocation();

  return (
    <AuthProvider>
      <div className="App">
        <div className="appCont">
          <Switch>
            <AuthRoute exact path="/">
              <SplashPage />
            </AuthRoute>
            <Route path={["/doctor"]}>
              <DoctorsApp />
            </Route>

            <AuthRoute exact path="/signup">
              <SignUp />
            </AuthRoute>

            <AuthRoute exact path="/login">
              <LandingPage />
            </AuthRoute>
            <>
              <div className="inAppContent">
                <div className="inAppTop">
                  <Blob
                    size={"45vh"}
                    style={{ position: "absolute", margin: "-20vh" }}
                  />
                  <Blob
                    style={{ alignSelf: "flex-end", position: "absolute" }}
                  />
                  <Route
                    path={[
                      "/home",
                      "/calendar",
                      "/tasks",
                      "/messages",
                      "/search",
                      "/pets",
                    ]}
                  >
                    <UserMenue />
                  </Route>
                </div>
                <div className="inAppMain">
                  <Blob
                    size={"30vh"}
                    style={{
                      position: "absolute",
                      marginTop: "30vh",
                      marginLeft: "-11vw",
                    }}
                  />
                  <Blob
                    size={"25vh"}
                    style={{
                      position: "absolute",
                      marginLeft: "20vw",
                    }}
                  />

                  <AnimatePresence exitBeforeEnter>
                    <Switch location={location} key={location.pathname}>
                      <ProtectedRoute exact path="/home">
                        <Home />
                      </ProtectedRoute>

                      <ProtectedRoute exact path="/pets">
                        <Pets />
                      </ProtectedRoute>

                      <ProtectedRoute exact path="/pets/create">
                        <PetForm />
                      </ProtectedRoute>

                      <ProtectedRoute exact path="/calendar/tasks/:day">
                        <Tasks />
                      </ProtectedRoute>

                      <ProtectedRoute exact path="/tasks/create/:page">
                        <TaskForm />
                      </ProtectedRoute>

                      <ProtectedRoute exact path="/search">
                        <Search />
                      </ProtectedRoute>

                      <ProtectedRoute exact path="/calendar">
                        <CalendarPage />
                      </ProtectedRoute>

                      <ProtectedRoute exact path="/messages">
                        <UserMessages />
                      </ProtectedRoute>

                      <AuthRoute path="*">
                        <LandingPage />
                      </AuthRoute>
                    </Switch>
                  </AnimatePresence>
                </div>
                <Route
                  path={[
                    "/home",
                    "/pets",
                    "/calendar",
                    "/tasks",
                    "/messages",
                    "/search",
                    "/doctor",
                  ]}
                >
                  <div className="inAppBottom">
                    <Blob
                      size={"70vh"}
                      style={{
                        position: "absolute",
                        marginLeft: "-20vw",
                        zIndex: "-1",
                      }}
                    />
                    <Nav />

                    <Blob
                      size={"40vh"}
                      style={{
                        position: "absolute",
                        marginLeft: "85vw",
                      }}
                    />
                  </div>
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
