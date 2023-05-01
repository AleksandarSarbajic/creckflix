import { useRouter } from "next/router";
import "vidstack/styles/defaults.css";

import { MediaOutlet, MediaPlayer } from "@vidstack/react";

export default function Watch() {
  const router = useRouter();
  console.log(router);
  return (
    <MediaPlayer
      src="https://creckflix.s3.eu-north-1.amazonaws.com/Operation.Fortune.Ruse.de.Guerre.mp4"
      poster="https://media-files.vidstack.io/poster.png"
      controls
    >
      {/* ^ remove `controls` attribute if you're designing a custom UI */}
      <MediaOutlet />
    </MediaPlayer>
  );
}
