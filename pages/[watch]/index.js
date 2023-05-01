import { useRouter } from "next/router";
import "vidstack/styles/defaults.css";

import { MediaOutlet, MediaPlayer } from "@vidstack/react";

export default function Player() {
  return (
    <MediaPlayer
      src={[
        { src: "https://media-files.vidstack.io/720p.mp4", type: "video/mp4" },
      ]}
      controls
    >
      <MediaOutlet />
    </MediaPlayer>
  );
}
