import React from 'react';

const Layout = (props) => {
  return(
    <div>
        {/* <Header /> */}
        <h1> Messages </h1>
        {props.children}
    </div>
   )

 }

export default Layout