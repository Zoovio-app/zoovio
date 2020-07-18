import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthContext';



const Navbar = (params) => {
    const { currentUser } = useContext(AuthContext);
    const displayNavForUser = () => {
        if(currentUser) {
            return( 
                <div className="user-navBar">
                    <NavLink className="user-nav" to={"/home"}>Home</NavLink>
                    <NavLink className="user-nav" to={"/pets"}> Pets </NavLink>
                    <NavLink className="user-nav" to={"/messages"}> Messages </NavLink>
                    <NavLink className="user-nav" to={"/settings"}> Settings </NavLink>
                 </div>
             )  
        } else {        
            return (
                <div>
                    <NavLink className="publicNavLogin" id="login" to={"/login"}> Log in</NavLink>
                    <NavLink className="publicNavSignup" id="signup" to={"/signup"}> Sign up</NavLink>
                </div>
            )
        }
    }
    return (
        <div> 
            <nav className="navbarUno"> 
            {/* <NavLink to={"/"}> Login in</NavLink>   */}
                {displayNavForUser()}
            </nav>
        </div>
    )
}

export default Navbar;
