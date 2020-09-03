import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import { cloudLogout } from '../../../../util/logoutFunctions';
import './doctorNav.css';
import { authInfoState } from '../../slices/authInfoSlice';
import { AuthContext } from '../../../../providers/AuthContext';


const DoctorNav = () => {
    const auth = useSelector(authInfoState);
    const dispatch = useDispatch();
    const { currentUser } = useContext(AuthContext); 


    const displayNavForDoctor = () => {
        if(currentUser) {
            return( 
                <div className="user-navBar">
                    <ul className="docPortalNavUl">
                        <li className="style-navigation-left"><a className="syleA2" class="hoverable" href="/doctor/home"> Home </a></li>
                        <li className="style-navigation-right"><a className="syleA2" class="hoverable" href="/doctor/pet-charts"> Pet Charts </a></li>
                        <li className="style-navigation-right"><a className="syleA2" class="hoverable" href="/doctor/virtual-appointment"> Virtual Appointments </a></li>
                        <li className="style-navigation-right"><a className="syleA2" class="hoverable" href="/doctor/appointments"> Upcoming Appointments</a></li>
                        <li className="style-navigation-right"><a className="syleA2" class="hoverable" href="/messaging"> Messages </a></li>
                        {/* <li> <Link to={'/'} onClick={() => {dispatch(cloudLogout(auth.uid))}}>Logout</Link> </li> */}
                    </ul>
                </div>
             )  
        } else {        
            return (
                <div className="non-user-nav">
                    {/* <ul className='pintrestLogoLetters'>P</ul> */}
                    {/* <div className="logo-pin">  */}
                    <NavLink className="mainPortal" to={"/doctor/portal"}> LOGO </NavLink>
                    <NavLink className="mainPortal" to={"/about"}> About Zoovio </NavLink>
                    <NavLink className="mainPortal" to={"/contact"}> Contact </NavLink>
                    <NavLink className="mainPortal" id="login" to={"/doctor/login"}> Log in</NavLink>
                    <NavLink className="mainPortal" id="signup" to={"/doctor/signup"}> Sign up</NavLink>
            
              
                    {/* import login */}
                    {/* import signup */}
                </div>
            )
        }
    }
    return (
        <div> 
            <nav className="navbarUno"> 
            {/* <NavLink to={"/"}> Login in</NavLink>   */}
                {displayNavForDoctor()}
            </nav>
        </div>
    )
}

export default DoctorNav






