import React, { useEffect } from "react";
import { Cloudinary } from "cloudinary-core";
import "cloudinary-video-player";

function VideoPlaylist() {
  const cld = new Cloudinary({
    cloud_name: "kizmelvin",
    secure: true,
  });
  const videoPlaylistInit = () => {
    const player = cld.videoPlayer("playlist-player", {
      controls: true,
      bigPlayButton: true,
      playlistWidget: {
        direction: "horizontal",
        total: 4,
      },
    });

    player.playlistByTag("playlist-video", {
      autoAdvance: false,
      repeat: true,
    });
  };

  useEffect(() => {
    videoPlaylistInit();
  }, []);
  return (
    <>
      <div>
        <h1>Video Playlist</h1>
        <div style={{ width: "600px", height: "400" }} className="video-card">
          <video id="playlist-player" className="cld-video-player cld-fluid" />
        </div>
      </div>
    </>
  );
}

export default VideoPlaylist;
