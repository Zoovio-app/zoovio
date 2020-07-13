import React, { useContext, useEffect } from "react";
import { logOut } from "../../util/firebaseFunctions";
import axios from "axios";
import { apiUrl } from "../../util/apiUrl";
import { AuthContext } from "../../providers/AuthContext";
import { useDispatch, useSelector } from "react-redux";
import { updateUserInfo, userInfoState } from "../userInfo/userInfoSlice";

const Home = () => {
  const { token, currentUser } = useContext(AuthContext);
  const dispatch = useDispatch();
  const API = apiUrl();
  const state = useSelector(userInfoState);

  const getUserInfo = async (e) => {
    try {
      let res = await axios({
        method: "get",
        url: `${API}/api/users/${currentUser.id}`,
        headers: {
          authToken: token,
        },
      });
      dispatch(updateUserInfo({ user: res.data.user.pop() }));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <div>
      <h1>hi,{state.user ? state.user.name : null} </h1>
      <button onClick={getUserInfo}>test</button>
      <button onClick={logOut}> Log Out</button>
    </div>
  );
};

export default Home;
