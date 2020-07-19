import React from 'react';
import './Text.css'

const Text = ({ users }) => {
    return (
        <div className="textContainer">
          <div>
            <h1>User's Messages </h1>
          </div>
          {
            users
              ? 
              (
                <div>
                  <h1> People currently chatting: </h1>
                  <div className="activeContainer">
                    <h2>
                      {users.map(({ name }) => (
                        <div key={name} className="activeItem">
                          {name}
                          {/* <img alt="Online Icon" src={onlineIcon}/> */}
                        </div>
                      ))}
                    </h2>
                  </div>
                </div>
              )
              : null
          }
        </div>
    )

}

export default Text