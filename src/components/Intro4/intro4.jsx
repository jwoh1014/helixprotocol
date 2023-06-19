import React from "react";
import particlesConfig from "../../config/particle-config";
import particlesBlackConfig from "../../config/pr-s-black";
import Particles from "react-tsparticles";

const Intro4 = ({ sliderRef, blackStar }) => {
  return (
    <header ref={sliderRef} className="particles circle-bg valign">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="cont text-center">
              <h1>
                <span className="color-font">Helix</span> is the DEFI{" "}
                OneStop <span className="color-font"> Gateway</span> on{" "}
                <span className="color-font1">XRP</span> Ledger{" "}
                {/* <span className="color-font">Optional Bonds</span>  */}
              </h1>
              <h5 style={{ fontFamily: "Poppins" }}>
                {" "}
                powered by{" "}
                <span
                  className="color-font1"
                  style={{ fontFamily: "Poppins", fontSize: "32px" }}
                >
                  {" "}   <img style={{width : "220px"}} src="/img/xrpl logo.png" alt="image" />
            
                </span><br/>
              
             
            
              </h5>
            </div>
          </div>
        </div>
      </div>

      <Particles
        id="particles-js"
        options={blackStar ? particlesBlackConfig : particlesConfig}
      />

      <div className="gradient-circle"></div>
      <div className="gradient-circle two"></div> 
      <div className="line bottom left"></div>
    </header>
  );
};

export default Intro4;
