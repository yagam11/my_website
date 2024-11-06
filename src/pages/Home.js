import React from 'react';
import '../styles/App.css';

function Home() {
  return (
    <div className="main-container">
      <div className="centered-box flex flex-wrap items-center">
        <div className="education-info">
          <h3>Hello.</h3>
          <p>I am John, currently a CS student at Brown. My interest lies in 3D reconstruction.</p>
          <p>Before coming to Brown, I graduated as an APMA-CS student from Boston University.</p>

          <h3 className="education-heading">Education_</h3>

          {/* Brown University */}
          <div className="education-details">
            <img 
              src={require('../assets/brownu.png')}
              alt="Brown University Badge"
              className="school-badge" 
            />
            <div className="school-info">
              <h4 className="school-name">Brown University</h4>
              <p className="school-location">Providence, RI, USA</p>
              <p className="school-major">Major: Computer Science</p>
              <p className="school-timeline">September 2024 - May 2026</p>
            </div>
          </div>

          {/* Boston University */}
          <div className="education-details">
            <img 
              src={require('../assets/bostonu.png')}
              alt="Boston University Badge"
              className="school-badge" 
            />
            <div className="school-info">
              <h4 className="school-name">Boston University</h4>
              <p className="school-location">Boston, MA, USA</p>
              <p className="school-major">Major: APMA-CS; Honor: Cum Laude</p>
              <p className="school-timeline">September 2020 - May 2024</p>
            </div>
          </div>

          {/* Shanghai United International School */}
          <div className="education-details">
            <img 
              src={require('../assets/suisgb.png')}
              alt="SUISGB Badge"
              className="school-badge" 
            />
            <div className="school-info">
              <h4 className="school-name">Shanghai United International School</h4>
              <p className="school-location">Shanghai, China</p>
              <p className="school-major">International Baccalaureate Program; Honor: Class Clown</p>
              <p className="school-timeline">Graduated May 2020</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
