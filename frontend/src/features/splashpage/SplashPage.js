import React, { useEffect, useContext } from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import vet from "../../images/vetpic.png";
import relax from "../../images/relax.png";
import hangout from "../../images/hangout.png";
import "./css/splash.css";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { apiUrl } from "../../util/apiUrl";
import axios from "axios";
import { AuthContext } from "../../providers/AuthContext";
import logo from "../../assets/img/logo.png";

const SplashPage = () => {
  const history = useHistory();
  const API = apiUrl();
  const { currentUser, token } = useContext(AuthContext);
  
  useEffect(() => {
    const wakeUp = async () => {
      try {
        await axios({
          method: "get",
          url: `${API}/api/users/${1}`,
          headers: {
            authToken: token,
          },
        });
      } catch (error) {
        console.log(error);
      }
    };
    wakeUp();
  }, [API, currentUser, token]);
  
  

  return (
    <div className="splashMain">
      <div className="topCont">
        <div className="titleCont">
          <img style={{ height: "12vh" }} alt="" src={logo} />
        </div>
        <div>
          <svg
            className="blob"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#f18e7c"
              d="M47.3,-64.1C62.9,-53.8,78.4,-42.1,77.8,-28.8C77.2,-15.5,60.6,-0.6,50.9,12.6C41.2,25.9,38.4,37.5,31.1,45.1C23.8,52.8,11.9,56.5,-0.5,57.2C-12.9,58,-25.9,55.7,-40.2,50.3C-54.5,44.9,-70.2,36.4,-70.2,25.4C-70.3,14.3,-54.7,0.8,-45.5,-10.9C-36.3,-22.6,-33.5,-32.4,-27,-45.7C-20.4,-59,-10.2,-75.7,2.8,-79.6C15.8,-83.5,31.7,-74.4,47.3,-64.1Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          height: "60vh",
          alignItems: "center",
        }}
      >
        <div className="blob2">
          <svg
            className="blob"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#f18e7c"
              d="M47.3,-64.1C62.9,-53.8,78.4,-42.1,77.8,-28.8C77.2,-15.5,60.6,-0.6,50.9,12.6C41.2,25.9,38.4,37.5,31.1,45.1C23.8,52.8,11.9,56.5,-0.5,57.2C-12.9,58,-25.9,55.7,-40.2,50.3C-54.5,44.9,-70.2,36.4,-70.2,25.4C-70.3,14.3,-54.7,0.8,-45.5,-10.9C-36.3,-22.6,-33.5,-32.4,-27,-45.7C-20.4,-59,-10.2,-75.7,2.8,-79.6C15.8,-83.5,31.7,-74.4,47.3,-64.1Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>
        <Carousel>
          <Carousel.Item>
            <img src={hangout} alt="First slide" />

            <Carousel.Caption>
              <div>
                <h3
                  style={{
                    color: "#141827",
                    fontWeight: "700",
                    marginBottom: "1.25rem",
                    marginTop: "1.25rem",
                  }}
                >
                  {" "}
                  Create Tasks
                </h3>
                <p
                  style={{
                    color: "#225095",
                    fontSize: "20px",
                    fontWeight: "500",
                  }}
                >
                  Keep track of your pets daily activities.
                </p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img src={vet} alt="" />
            <Carousel.Caption>
              <div>
                <h3
                  style={{
                    color: "#141827",
                    fontWeight: "700",
                    marginBottom: "1.25rem",
                    marginTop: "1.25rem",
                  }}
                >
                  {" "}
                  Medical
                </h3>
                <p
                  style={{
                    color: "#225095",
                    fontSize: "20px",
                    fontWeight: "500",
                  }}
                >
                  Search for Vets near you and set up appointments.
                </p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={relax} alt="" />
            <Carousel.Caption>
              <div>
                <p
                  style={{
                    marginBottom: "-1vh",
                    color: "#225095",
                    fontSize: "20px",
                    fontWeight: "500",
                  }}
                >
                  Enjoy the peace mind knowing that all your pets needs can be
                  managed all in one App!
                </p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="bottomCont">
        <div className="blob4">
          <svg
            className="blob"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#f18e7c"
              d="M47.3,-64.1C62.9,-53.8,78.4,-42.1,77.8,-28.8C77.2,-15.5,60.6,-0.6,50.9,12.6C41.2,25.9,38.4,37.5,31.1,45.1C23.8,52.8,11.9,56.5,-0.5,57.2C-12.9,58,-25.9,55.7,-40.2,50.3C-54.5,44.9,-70.2,36.4,-70.2,25.4C-70.3,14.3,-54.7,0.8,-45.5,-10.9C-36.3,-22.6,-33.5,-32.4,-27,-45.7C-20.4,-59,-10.2,-75.7,2.8,-79.6C15.8,-83.5,31.7,-74.4,47.3,-64.1Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>
        <div className="splashButtonsCont">
          <div className="buttsHolder">
            <div className="splashSignUpCont">
              <Button onClick={() => history.push("/signup")}>Sign Up</Button>
            </div>
            <p style={{ padding: "1px" }}>Already a user?</p>{" "}
            <Link to="/login">Login</Link>
          </div>

          <div className="footerDiv">
            <Link to="/about">About</Link>
            <Link to="/doctor">Doc Portal</Link>
            <Link to="/other">Other</Link>
          </div>
        </div>

        <div className="blob3">
          <svg
            className="blob"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#f18e7c"
              d="M47.3,-64.1C62.9,-53.8,78.4,-42.1,77.8,-28.8C77.2,-15.5,60.6,-0.6,50.9,12.6C41.2,25.9,38.4,37.5,31.1,45.1C23.8,52.8,11.9,56.5,-0.5,57.2C-12.9,58,-25.9,55.7,-40.2,50.3C-54.5,44.9,-70.2,36.4,-70.2,25.4C-70.3,14.3,-54.7,0.8,-45.5,-10.9C-36.3,-22.6,-33.5,-32.4,-27,-45.7C-20.4,-59,-10.2,-75.7,2.8,-79.6C15.8,-83.5,31.7,-74.4,47.3,-64.1Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SplashPage;
