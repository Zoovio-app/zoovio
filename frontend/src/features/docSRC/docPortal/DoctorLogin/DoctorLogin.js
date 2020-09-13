import React, { useState, useEffect } from 'react'
import Layout from '../../components/Layout/Layout';
// import Card from '../../components/UI/Card';
import { cloudSignin } from '../../../../util/loginFunctions';
import './docLogin.css';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { authInfoState } from '../../slices/authInfoSlice';
import zoovioDocPet from '../../../../assets/img/zoovioDocPet.png'
// /**
// * @author
// * @function DoctorLogin
// **/

const DoctorLogin = (props) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const auth = useSelector(authInfoState);
  const history = useHistory();

  useEffect(() => {
    if(!auth.authenticated){
      // dispatch(isLoggedInUser())
    }
  }, []);


  const userLogin = (e) => {
    e.preventDefault();
    dispatch(cloudSignin(e, { email, password }));
  }


// function addcl(){
// 	let parent = this.parentNode.parentNode;
// 	parent.classList.add("focus");
// }

// function remcl(){
// 	let parent = this.parentNode.parentNode;
// 	if(this.value == ""){
// 		parent.classList.remove("focus");
// 	}
// }


// inputs.forEach(input => {
// 	input.addEventListener("focus", addcl);
// 	input.addEventListener("blur", remcl);
// });



  // if(auth.authenticated){
  //   history.push("/doctor/home")
  //   // return <Redirect to={`/home/doctor`} />
  // }


  return(
    // <Layout>
      <div className="loginContainer">

      {/* <div className="navBar4DocPortal">
                <ul className="docPortalNavUl">
                    <li className="docPortalNavLiLeft"><a className="syleA" href="/doctor/portal">ZooVio</a></li>
                    <li className="docPortalNavLiRight"><a className="syleA" href="/doctor/inquire">Inquire</a></li>
                    <li className="docPortalNavLiRight"><a className="syleA" href="/doctor/signup">Signup</a></li>
                    <li className="docPortalNavLiRight"><a className="syleA" href="/doctor/login">Login</a></li>
                    <li className="docPortalNavLiRight"><a className="syleA" href="/about">About</a></li>
                </ul>
            </div> */}

            <div className= "zoovioMain4img"> 
                <img className="zoovioImage" src={zoovioDocPet}/>
            </div>
      

          <div className="docLoginFormMain">
          <form className="docLoginForm" onSubmit={userLogin}>
				    <h2 className="welcomeLogin"> Welcome </h2>
            
          
            <div className="inputDiv one">
           		<div class="i">
           		  <i class="fas fa-user"></i>
           		</div>
           		<div class="div">
           		  <h5>Email:</h5>
           		  <input 
                name="email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
              />
           		</div>
           	</div>


            <div className="inputDiv pass">
           		<div class="i"> 
           		  <i class="fas fa-lock"></i>
           		</div>
           		<div class="div">
           		  <h5>Password:</h5>
           		  <input 
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
              />
            	</div>
            </div>

            <div>
              <button className="docLoginBtn">Login</button>
            </div>
          </form>
        </div> 
      </div>
   )

 }

export default DoctorLogin