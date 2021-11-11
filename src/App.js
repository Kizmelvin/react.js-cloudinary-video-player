import React from "react";
import "./styles.css";
import "cloudinary-video-player/dist/cld-video-player.min.css";

import VideoPlayer from "./VideoPlayer";

export default function App() {
  return (
    <div className="App">
      <VideoPlayer />
      {/* React component for video player*/}
    </div>
  );
}
