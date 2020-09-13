import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../providers/AuthContext";

export const AuthRoute = ({ children, ...rest }) => {
  const { currentUser } = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={({ location }) => {
        return !currentUser ? children : <Redirect to="/home" />;
      }}
    />
  );
};

export const ProtectedRoute = ({ children, ...rest }) => {
  const { currentUser } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={({ location }) => {
        return currentUser ? children : <Redirect to="/" />;
      }}
    />
  );
};

export const DocProtectedRoute = ({ children, ...rest }) => {
  const { currentUser } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={({ location }) => {
        return currentUser ? children : <Redirect to="/doctor/login" />;
      }}
    />
  );
};

export const DoctorAuthRoute = ({ children, ...rest }) => {
  const { currentUser } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={({ location }) => {
        return !currentUser ? children : <Redirect to="/doctor/home" />;
      }}
    />
  );
};
