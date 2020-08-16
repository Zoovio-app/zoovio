import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import { cloudLogout } from '../../actions/auth.actions';
import './doctorNav.css';


const DoctorNav = () => {
    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();


    const displayNavForDoctor = () => {
        if(auth.authenticated) {
            return( 
                <div className="user-navBar">
                    <ul>
                        <li className="style-navigation"><a class="hoverable" href="/doctor/home"> Home </a></li>
                        <li className="style-navigation"><a class="hoverable" href="/messaging"> Messages </a></li>
                        <li className="style-navigation"><a class="hoverable" href="/doctor/appointments"> Upcoming Appointments</a></li>
                        <li className="style-navigation"><a class="hoverable" href="/doctor/virtual-appointment"> Virtual Appointments </a></li>
                        <li className="style-navigation"><a class="hoverable" href="/doctor/pet-charts"> Pet Charts </a></li>
                        <li> <Link to={'/'} onClick={() => {dispatch(cloudLogout(auth.uid))}}>Logout</Link> </li>
                    </ul>
                </div>
             )  
        } else {        
            return (
                <div className="non-user-nav">
                    {/* <ul className='pintrestLogoLetters'>P</ul> */}
                    {/* <div className="logo-pin">  */}
                    <NavLink className="mainPortal" to={"/"}> LOGO </NavLink>
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


//     return (
//         <div className="docNavbar">
//             <ul>
//                 <li className="style-navigation"><a class="hoverable" href="/doctor/home"> Home </a></li>
//                 <li className="style-navigation"><a class="hoverable" href="/messaging"> Messages </a></li>
//                 <li className="style-navigation"><a class="hoverable" href="/doctor/appointments"> Upcoming Appointments</a></li>
//                 <li className="style-navigation"><a class="hoverable" href="/doctor/virtual-appointment"> Virtual Appointments </a></li>
//                 <li className="style-navigation"><a class="hoverable" href="/doctor/pet-charts"> Pet Charts </a></li>
//             </ul>
//         </div>
//     )
// }

export default DoctorNav






