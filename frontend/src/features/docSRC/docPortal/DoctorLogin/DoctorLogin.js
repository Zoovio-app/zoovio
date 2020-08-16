import React, { useState, useEffect } from 'react'
import Layout from '../../components/Layout/Layout';
// import Card from '../../components/UI/Card';
import { cloudSigin, isLoggedInUser } from '../../actions';
// import './style.css';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

// /**
// * @author
// * @function DoctorLogin
// **/

const DoctorLogin = (props) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
  const history = useHistory();

  useEffect(() => {
    if(!auth.authenticated){
      dispatch(isLoggedInUser())
    }
  }, []);




  const userLogin = (e) => {
    e.preventDefault();

    if(email == ""){
      alert("Email is required");
      return;
    }
    if(password == ""){
      alert("Password is required");
      return;
    }

    dispatch(cloudSigin({ email, password }));

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
            />

            <input 
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
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