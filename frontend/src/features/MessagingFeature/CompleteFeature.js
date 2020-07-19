import React from 'react';
import { NavLink } from 'react-router-dom'
import Chat from './Chat/Chat';
import Join from './Join/Join';

import { Link } from "react-router-dom";

const CompleteFeature = ({title}) => {
  return (
     <div>
       <h1> Your messages </h1>

          {/* <div className="container"> { title } </div> */}

          <div> 
            <Link className="style-chat" to={"/chat"} > Chat </Link>
          </div>

          <div>
            <Link className="style-join" to={"/join"} > Join </Link>
          </div>
        
     </div>
  );
}

export default CompleteFeature;