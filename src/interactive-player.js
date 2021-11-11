function setupPlayer(cloudDetails) {
  const { cld } = cloudDetails;
  var player = cld.videoPlayer("player", {
    interactionDisplay: {
      theme: {
        template: "shadowed",
      },
      layout: {
        enable: true,
        showAgain: true,
      },
    },
  });
  const sources = {
    top: "https://res.cloudinary.com/kizmelvin/video/upload/v1636107047/gift-flower-left-zoom_ynwqvo.mp4",
    middle:
      "https://res.cloudinary.com/kizmelvin/video/upload/v1636107049/gift-flower-middle-zoom_l60hp0.mp4",
    bottom:
      "https://res.cloudinary.com/kizmelvin/video/upload/v1636107050/gift-flower-right-zoom_wgnii9.mp4",
  };

  player.source("gift-flower_fawler", {
    interactionAreas: {
      enable: true,
      template: "landscape",
      onClick: function (event) {
        var src = sources[event.item.id];

        event.zoom(src);
      },
    },
  });
  return;
}

export default setupPlayer;
