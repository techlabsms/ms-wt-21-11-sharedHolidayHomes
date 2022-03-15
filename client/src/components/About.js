import React from "react";
import "./About.css";

function About() {
    return (
      <div>
        <div className="text-about">
          <h1>Build precious memories with family or friends</h1>
          <p>
          We know from experience which complications for the purchase and use of the vacation house exists. 
          On average, only 8 to 10 weeks/year are used by the owner. 
          Nevertheless, the price does not change and can be quite expensive. 
          What about sharing the price with owners who use the property at different time spans? 
          Shared Holidays offers ownership of dream vacation properties - cheaper, easier and, above all, with a full-service package.
          </p>
        </div>
        <img className="cover" alt="beach" src="https://i2-prod.mirror.co.uk/incoming/article13555103.ece/ALTERNATES/s1200d/0_Perfect-beach-view-Summer-holiday-and-vacation-design-Inspirational-tropical-beach-palm-trees-and.jpg"></img>
        <div className="quote">
          <p className="quote1">“The idea for Shared Holidays was born from our desire to buy a property on the beach of Portugal together with good friends to go surfing there regularly.” </p>
          <p className="quote2">“Vacation properties offer their owners very special moments and memories. In addition, vacation properties have been very interesting investments in recent years.”</p>
        </div>
        <div className="team">
          <h2>Meet our Team</h2>
          <div className="team-wrapper">
            <div className="teammember">
              <img alt="teammemeber" src="https://www.pspr.de/wp-content/uploads/2017/08/Avatar-Platzhalter.jpg"></img>
              <h4>Luc</h4>
              <p>Ux-Design</p>
            </div>
            <div className="teammember">
              <img alt="teammemeber" src="https://www.pspr.de/wp-content/uploads/2017/08/Avatar-Platzhalter.jpg"></img>
              <h4>Theo</h4>
              <p>Ux-Design</p>
            </div>
            <div className="teammember">
              <img alt="teammemeber" src="https://www.pspr.de/wp-content/uploads/2017/08/Avatar-Platzhalter.jpg"></img>
              <h4>Jan-Dennis</h4>
              <p>Frontend</p>
            </div>
            <div className="teammember">
              <img alt="teammemeber" src="https://www.pspr.de/wp-content/uploads/2017/08/Avatar-Platzhalter.jpg"></img>
              <h4>Ina</h4>
              <p>Frontend</p>
            </div>
            <div className="teammember">
              <img alt="teammemeber" src="https://www.pspr.de/wp-content/uploads/2017/08/Avatar-Platzhalter.jpg"></img>
              <h4>Julia</h4>
              <p>Backend</p>
            </div>
            <div className="teammember">
              <img alt="teammemeber" src="https://www.pspr.de/wp-content/uploads/2017/08/Avatar-Platzhalter.jpg"></img>
              <h4>Paul</h4>
              <p>Backend</p>
            </div>
            <div className="teammember">
              <img alt="teammemeber" src="https://www.pspr.de/wp-content/uploads/2017/08/Avatar-Platzhalter.jpg"></img>
              <h4>Lars</h4>
              <p>Mentor</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default About;