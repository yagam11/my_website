import React from 'react';

const Background = () => {
  return (
    <div className="main-container"> {/* Changed the outer container class name */}
      <div className="centered-box">  {/* Changed the box class name */}
        <h2>Background</h2>
        <p>Background of this page is #e6f0ff.</p>
      </div>
    </div>
  );
};

export default Background;