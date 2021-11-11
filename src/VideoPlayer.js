import React, { useEffect } from "react";
import { Cloudinary } from "cloudinary-core";
import setupPlayer from "./interactive-player";
import VideoPlaylist from "./playlist-player";

const VideoPlayer = () => {
  const cloudDetails = {
    cld: new Cloudinary({ cloud_name: "kizmelvin", secure: true }),
  };

  useEffect(() => {
    setupPlayer(cloudDetails);
  }, []);

  return (
    <div className="container">
      <div>
        <div>
          <h1>Interactive Video</h1>
          <p>Click on the video layout below to see the UI interactions.</p>
          <div style={{ width: "600px", height: "400" }}>
            <video
              id="player"
              controls
              muted
              className="cld-video-player cld-fluid"
            ></video>
          </div>
        </div>
        <br />
        <br />
        <div>
          <VideoPlaylist />
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
