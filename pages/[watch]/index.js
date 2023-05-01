import { useRouter } from "next/router";
import "vidstack/styles/defaults.css";

import { MediaOutlet, MediaPlayer } from "@vidstack/react";

export default function Player() {
  return (
    <MediaPlayer
      src={[
        {
          src: "https://creckflix.s3.eu-north-1.amazonaws.com/3X4+ANUBIS.mp4",
          type: "video/mp4",
        },
      ]}
      controls
    >
      <MediaOutlet />
    </MediaPlayer>
  );
}
