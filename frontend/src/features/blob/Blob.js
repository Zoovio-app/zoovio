import React from "react";

const Blob = ({ style, size }) => {
  return (
    <div style={style}>
      <svg
        style={{ height: size }}
        className="blob"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#f18e7c"
          d="M47.3,-64.1C62.9,-53.8,78.4,-42.1,77.8,-28.8C77.2,-15.5,60.6,-0.6,50.9,12.6C41.2,25.9,38.4,37.5,31.1,45.1C23.8,52.8,11.9,56.5,-0.5,57.2C-12.9,58,-25.9,55.7,-40.2,50.3C-54.5,44.9,-70.2,36.4,-70.2,25.4C-70.3,14.3,-54.7,0.8,-45.5,-10.9C-36.3,-22.6,-33.5,-32.4,-27,-45.7C-20.4,-59,-10.2,-75.7,2.8,-79.6C15.8,-83.5,31.7,-74.4,47.3,-64.1Z"
          transform="translate(100 100)"
        />
      </svg>
    </div>
  );
};

export default Blob;
