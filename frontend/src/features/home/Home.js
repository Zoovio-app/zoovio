import React, { useContext, useEffect } from "react";
import { logOut } from "../../util/firebaseFunctions";
import axios from "axios";
import { apiUrl } from "../../util/apiUrl";
import { AuthContext } from "../../providers/AuthContext";

const Home = () => {
  const { token, currentUser } = useContext(AuthContext);
  const API = apiUrl();

  const getUserInfo = async (e) => {
    try {
      let res = await axios({
        method: "get",
        url: `${API}/api/users/${currentUser.id}`,
        headers: {
          authToken: token,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <div>
      HOME
      <button onClick={getUserInfo}>TEST</button>
      <button onClick={logOut}> Log Out</button>
    </div>
  );
};

export default Home;
