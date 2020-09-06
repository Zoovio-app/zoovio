import React from "react";
import { Switch } from "react-router-dom";
import { DoctorAuthRoute, PrivateRoute } from "../../util/routeUtil";
import DoctorHome from "./DoctorHome/DoctorHome";
import DoctorLogin from "./DoctorLogin/DoctorLogin";
import DoctorPortal from "./DoctorPortal/DoctorPortal";
import Messaging from "../messaging/Messaging/Messaging";

const DoctorsApp = () => {
  return (
    <div>
      <Switch>
        <DoctorAuthRoute exact path="/doctor">
          <DoctorPortal />
        </DoctorAuthRoute>

        <PrivateRoute exact path="/doctor/home">
          <DoctorHome />
        </PrivateRoute>

        <DoctorAuthRoute exact path="/doctor/login">
          <DoctorLogin />
        </DoctorAuthRoute>

        <PrivateRoute exact path="/messaging">
          <Messaging />
        </PrivateRoute>
      </Switch>
    </div>
  );
};

export default DoctorsApp;
