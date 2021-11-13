import React from "react";
import "./styles.css";
import VideoPlayer from "./Components/VideoPlayer";
import VideoPlaylist from "./Components/playlist-player";

export default function App() {
  return (
    <div className="App">
      <VideoPlayer />
      <br />
      <VideoPlaylist />
    </div>
  );
}
