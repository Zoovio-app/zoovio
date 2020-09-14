import React from "react";
import { Switch } from "react-router-dom";
import { DoctorAuthRoute, DocProtectedRoute } from "../../util/routeUtil";
import DoctorHome from "./DoctorHome/DoctorHome";
import DoctorLogin from "./DoctorLogin/DoctorLogin";
import DoctorPortal from "./DoctorPortal/DoctorPortal";
import DoctorInquire from "./DoctorInquire/DoctorInquire";
import Messaging from "../messaging/Messaging/Messaging";
import VideoChat from "../videoChat/videoChat";
import Blob from "../blob/Blob";
const DoctorsApp = () => {
  return (
    <div>
      {/* <Blob
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
      /> */}

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

        <DocProtectedRoute exact path="/doctor/virtual-appointment">
          <VideoChat />
        </DocProtectedRoute>
      </Switch>
    </div>
  );
};

export default DoctorsApp;
