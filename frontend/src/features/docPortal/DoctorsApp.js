import React from "react";
import { Switch } from "react-router-dom";
import { DoctorAuthRoute, DocProtectedRoute } from "../../util/routeUtil";
import DoctorHome from "./DoctorHome/DoctorHome";
import DoctorLogin from "./DoctorLogin/DoctorLogin";
import DoctorPortal from "./DoctorPortal/DoctorPortal";
import DoctorInquire from "./DoctorInquire/DoctorInquire";
import Messaging from "../messaging/Messaging/Messaging";

const DoctorsApp = () => {
  return (
    <div>
      <Switch>
        <DoctorAuthRoute exact path="/doctor">
          <DoctorPortal />
        </DoctorAuthRoute>

        <DoctorAuthRoute exact path="/doctor/inquire">
          <DoctorInquire />
        </DoctorAuthRoute>

        <DocProtectedRoute exact path="/doctor/home">
          <DoctorHome />
        </DocProtectedRoute>

        <DoctorAuthRoute exact path="/doctor/login">
          <DoctorLogin />
        </DoctorAuthRoute>

        <DocProtectedRoute exact path="/doctor/messaging">
          <Messaging />
        </DocProtectedRoute>
      </Switch>
    </div>
  );
};

export default DoctorsApp;
