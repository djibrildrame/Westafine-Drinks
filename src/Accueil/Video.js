import React from "react";
import Videowest from "../Westafine-img/video-westafine.mp4";

const Video = () => {
  return (
    <div>
    <video
      className="video"
      controls
      muted
      playsInline
      preload="metadata"
    >
      <source src={Videowest} type="video/mp4" />
      Votre navigateur ne supporte pas la vidéo.
    </video>
    </div>
  );
};

export default Video;