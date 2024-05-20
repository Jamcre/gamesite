import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      {/* <video src="/videos/video-2.mp4" autoPlay loop muted playbackRate="0.9" /> */}
      <h1>
        <b>B</b>
        <span>odiless </span>
        <br></br>
        <b>S</b>
        <span>keletons</span>
      </h1>

      <p>Play Now!</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          LATEST VERSION
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          onClick={() => {
            const link = document.createElement("a");
            link.href = "/gameBuilds/Bodiless Skeletons.zip";
            link.download = "Bodiless Skeletons.zip";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          }}
        >
          DOWNLOAD <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
