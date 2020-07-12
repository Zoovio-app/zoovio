import React from "react";
import { logOut } from "../../util/firebaseFunctions";

const Home = () => {
  return (
    <div>
      HOME
      <button onClick={logOut}> Log Out</button>
    </div>
  );
};

export default Home;
