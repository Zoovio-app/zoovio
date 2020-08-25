import React, { useState, useEffect } from 'react'
import Layout from '../../components/Layout/Layout';
// import Card from '../../components/UI/Card';
import { cloudSignin } from '../../../../util/loginFunctions';
// import './style.css';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { authInfoState } from '../../slices/authInfoSlice';

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



  // if(auth.authenticated){
  //   history.push("/doctor/home")
  //   // return <Redirect to={`/home/doctor`} />
  // }


  return(
    <Layout>
      <div className="loginContainer">
        {/* <Card> */}
          <form onSubmit={userLogin}>
            
            <input 
              name="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />

            <input 
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />


            <div>
              <button>Login</button>
            </div>

          </form>
        {/* </Card> */}
      </div>
    </Layout>
   )

 }

export default DoctorLogin