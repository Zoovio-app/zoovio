import React from 'react';
import Slider from '../../../landingPage/carousel/Slider';
import images from '../../../landingPage/images';
import { NavLink } from 'react-router-dom';
import '../DoctorPortal/docPortal.css';

const DoctorPortal = () => {
    return (
        <div className="mainContainer4DocPortal">

            <div className="navBar4DocPortal">
                <ul className="docPortalNavUl">
                    <li className="docPortalNavLiLeft"><a className="syleA" href="/doctor/portal">ZooVio</a></li>
                    <li className="docPortalNavLiRight"><a className="syleA" href="/doctor/inquire">Inquiries</a></li>
                    <li className="docPortalNavLiRight"><a className="syleA" href="/doctor/login">Login</a></li>
                    <li className="docPortalNavLiRight"><a className="syleA" href="/about">About</a></li>
                </ul>
            </div>


            

            <div className="docPortalBox"> 

                <div className="carousel4DocPortal">
                    <Slider className="sliderDesign" slides={images} />   
                </div>

                <div className="inquiryForm4DocPortal">
                    <h1 className="zoovioHeading"> <NavLink className="zoovioInquiryLink" path to ="/doctor/signup"> Inquire Here </NavLink></h1>
                    <h3 className="zoovioInfo"> Reach out to our team for advanced pricing and packaging</h3>
                </div>

            </div>
        </div>
    )
}

export default DoctorPortal;