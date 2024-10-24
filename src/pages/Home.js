import React from 'react';

function Home() {
  return (
    <div className="main-container"> {/* Changed the outer container class name */}
      <div className="centered-box">  {/* Changed the box class name */}
        <h2>Hello.</h2>
        <p>I am John, currently a CS student at Brown. My interest lies in 3D reconstruction.</p>
        <p>Before coming to Brown. I was a APMA-CS student at Boston University.</p>
      </div>
    </div>
  )
}

export default Home;
