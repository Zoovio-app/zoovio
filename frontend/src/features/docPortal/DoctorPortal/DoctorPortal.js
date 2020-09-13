import React from 'react';
import { Carousel } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
// import Slider from '../../../landingPage/carousel/Slider';
// import images from '../../../landingPage/images';
import { NavLink, Link } from 'react-router-dom';
import inquirezoovio from '../../../assets/img/inquirezoovio.png';
import zooviocovoid from '../../../assets/img/zooviocovoid.png';
import zooviosimplicity from '../../../assets/img/zooviosimplicity.png';
import zooviodoctors from '../../../assets/img/zooviodoctors.png';
import "bootstrap/dist/css/bootstrap.min.css";
import './docPortal.css';


const DoctorPortal = () => {
    const history = useHistory();
    return (
        <div className="mainContainer4DocPortal">

            <div className="topCont">
                <div className="titleCont">
                    <button onClick={() => history.push("/")}>Pet Owner?</button>
                    <h1 className="titleE2">ZooVio</h1>
                </div>
            </div>

            {/* <div className="navBar4DocPortal">
                <ul className="docPortalNavUl">
                    <li className="docPortalNavLiLeft"><a className="syleA" href="/doctor/portal">ZooVio</a></li>
                    <li className="docPortalNavLiRight"><a className="syleA" href="/doctor/inquire">Inquire</a></li>
                    <li className="docPortalNavLiRight"><a className="syleA" href="/doctor/signup">Signup</a></li>
                    <li className="docPortalNavLiRight"><a className="syleA" href="/doctor/login">Login</a></li>
                    <li className="docPortalNavLiRight"><a className="syleA" href="/about">About</a></li>
                </ul>
            </div> */}


    <div style={{
          display: "flex",
          justifyContent: "center",
          height: "60vh",
          alignItems: "center",
        }}> 
        <Carousel>
          <Carousel.Item>
            <img src={zooviodoctors} alt="First slide" />

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
                  Welcome to ZooVio
                </h3>
                <p
                  style={{
                    color: "#225095",
                    fontSize: "20px",
                    fontWeight: "500",
                  }}
                >
                  Keep track of all pets in your care.
                </p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>



          <Carousel.Item>
            <img src={zooviosimplicity} alt="" />
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
                  Simplicity
                </h3>
                <p
                  style={{
                    color: "#225095",
                    fontSize: "20px",
                    fontWeight: "500",
                  }}
                >
                  Enjoy the simplistic layout.
                </p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>





          <Carousel.Item>
            <img src={zooviocovoid} alt="" />
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
                  Covoid-19
                </h3>
                <p
                  style={{
                    marginBottom: "-1vh",
                    color: "#225095",
                    fontSize: "20px",
                    fontWeight: "500",
                  }}
                >
                  Maintain social distancing protocols with instant messaging and virtual appointments.
                </p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>


          <Carousel.Item>
            <img src={inquirezoovio} alt=" " />

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
                  Let's Go
                </h3>
                <p
                  style={{
                    color: "#225095",
                    fontSize: "20px",
                    fontWeight: "500",
                  }}
                >
                  Reach out to Zoovio to get started.
                </p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
    </div>



    <div className="bottomCont">
        <div className="splashButtonsCont">
          <div className="buttsHolder">
            <div className="splashSignUpCont">
              <Button className="docSignupBtn" onClick={() => history.push("/doctor/inquire")}> Inquire </Button>
            </div>
            <p style={{ padding: "1px" }}>Already a user?</p>{" "}
            <Link className="zoovioInquiryLink" to="/doctor/login">Login</Link>
          </div>

          <div className="footerDiv">
            <Link to="/about">About</Link>
            <Link to="/faq">FAQ</Link>
            <Link to="/other">Other</Link>
          </div>
        </div>
    </div>
    
      
    


            

            <div className="docPortalBox"> 

                {/* <div className="carousel4DocPortal">
                    <Slider className="sliderDesign" slides={images} />   
                </div> */}

                

                {/* <div className="inquiryForm4DocPortal">
                    <h1 className="zoovioHeading"> <NavLink className="zoovioInquiryLink" path to ="/doctor/inquire"> Inquire Here </NavLink></h1>
                    <h3 className="zoovioInfo"> Reach out to our team for advanced pricing and packaging</h3>
                </div> */}

                {/* <div style="position: absolute; margin-left: 85vh;">
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#225095" d="M34.4,-29.3C48.2,-29.4,65.6,-22,67,-12.1C68.5,-2.1,54,10.4,43.1,20.7C32.2,31.1,24.7,39.3,13.4,48.5C2.1,57.8,-13.2,67.9,-22.5,63.7C-31.7,59.5,-35,40.8,-32.5,27.4C-30,13.9,-21.6,5.8,-16.3,0.9C-11,-4,-8.6,-5.7,-6.4,-7.6C-4.1,-9.5,-2.1,-11.6,4.1,-16.5C10.3,-21.4,20.6,-29.1,34.4,-29.3Z" transform="translate(100 100)" />
                    </svg>
                </div> */}

            </div>
        </div>
    )
}

export default DoctorPortal;


// import React from "react";
// import Slider from "../../carousel/caro/Slider";
// import images from "../../carousel/images";
// import { NavLink } from "react-router-dom";
// import "../DoctorPortal/docPortal.css";

// const DoctorPortal = () => {
//   return (
//     <div className="mainContainer4DocPortal">
//       <div className="navBar4DocPortal">
//         <ul className="docPortalNavUl">
//           <li className="docPortalNavLiLeft">
//             <a className="syleA" href="/doctor/portal">
//               ZooVio
//             </a>
//           </li>
//           <li className="docPortalNavLiRight">
//             <a className="syleA" href="/doctor/inquire">
//               Inquiries
//             </a>
//           </li>
//           <li className="docPortalNavLiRight">
//             <a className="syleA" href="/doctor/login">
//               Login
//             </a>
//           </li>
//           <li className="docPortalNavLiRight">
//             <a className="syleA" href="/about">
//               About
//             </a>
//           </li>
//         </ul>
//       </div>

//       <div className="docPortalBox">
//         <div className="carousel4DocPortal">
//           <Slider className="sliderDesign" slides={images} />
//         </div>

//         <div className="inquiryForm4DocPortal">
//           <h1 className="zoovioHeading">
//             {" "}
//             <NavLink className="zoovioInquiryLink" path to="/doctor/inquire">
//               {" "}
//               Inquire Here{" "}
//             </NavLink>
//           </h1>
//           <h3 className="zoovioInfo">
//             {" "}
//             Reach out to our team for advanced pricing and packaging
//           </h3>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DoctorPortal;
