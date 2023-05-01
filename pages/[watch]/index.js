import { useRouter } from "next/router";
import "vidstack/styles/defaults.css";

import { MediaOutlet, MediaPlayer } from "@vidstack/react";

export default function Player() {
  return (
    <MediaPlayer
      load={"eager"}
      src={[
        {
          src: "https://creckflix.s3.eu-north-1.amazonaws.com/Operation.Fortune.Ruse.de.Guerre.2023.720p.WEBRip.800MB.x264-GalaxyRG.ogv",
          type: "video/ogg",
        },
        {
          src: "https://creckflix.s3.eu-north-1.amazonaws.com/Operation.Fortune.Ruse.de.Guerre.2023.720p.WEBRip.800MB.x264-GalaxyRG.avi",
          type: "video/avi",
        },
        {
          src: "https://creckflix.s3.eu-north-1.amazonaws.com/Operation.Fortune.Ruse.de.Guerre.mp4",
          type: "video/mp4",
        },
      ]}
      controls
    >
      {/* dsds */}
      <MediaOutlet />
    </MediaPlayer>
  );
}
