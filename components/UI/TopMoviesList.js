import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TopMovie from "./TopMovie";
import { useCallback } from "react";
function TopMoviesList(props) {
  const insertMovie = useCallback(
    async (movie) => {
      const user = { _id: props.id, movie: movie };

      const response = await fetch("/api/browse", {
        method: "POST",
        body: JSON.stringify(user),
        headers: { "Content-Type": "application/json" },
      });
      const data = await response.json();
    },
    [props, props.id]
  );

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 7,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  let number = 0;
  return (
    <div className={props.class}>
      <h2 className="trending">Top 10 movies in Serbia</h2>
      <Carousel responsive={responsive} ssr={true} containerClass="zindex">
        {props.movies.map((movie) => {
          number++;
          return (
            <TopMovie
              key={movie.id}
              id={movie.id}
              image={movie.image}
              preview={movie.preview}
              position={number}
              genre={movie.genre}
              insertMovie={insertMovie}
              user={props.user}
            />
          );
        })}
      </Carousel>
    </div>
  );
}
export default TopMoviesList;
