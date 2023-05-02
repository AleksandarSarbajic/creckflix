import { useRouter } from "next/router";
import "vidstack/styles/defaults.css";

import { MediaOutlet, MediaPlayer } from "@vidstack/react";
import { useEffect, useState } from "react";

export default function Player() {
  const [video, setVideo] = useState([]);
  useEffect(() => {
    setVideo(
      <div className="kurac">
        <iframe
          src="https://iframe.mediadelivery.net/embed/119116/d4a877ba-e3ce-4d3f-b57c-e2cf8b242172?autoplay=false"
          loading="lazy"
          className="picka"
          // allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
        ></iframe>
      </div>
    );
  }, []);
  return <>{video}</>;
}
