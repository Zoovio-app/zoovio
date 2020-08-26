import React from 'react';


/**
* @author
* @function Layout
**/

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