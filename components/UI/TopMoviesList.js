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
      items: 6,
    },
    largeDesktop: {
      breakpoint: { max: 3000, min: 1600 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 1600, min: 1300 },
      items: 5,
    },
    laptop: {
      breakpoint: { max: 1300, min: 704 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 704, min: 500 },
      items: 3,
    },
    // bigmobile: {
    //   breakpoint: { max: 650, min: 432 },
    //   items: 2,
    // },
    mobile: {
      breakpoint: { max: 500, min: 0 },
      items: 2,
    },
  };

  let number = 0;
  return (
    <div className={props.class}>
      <h2 className="trending">Top 10 movies in Serbia</h2>
      <Carousel
        responsive={responsive}
        ssr={true}
        containerClass="zindex"
        removeArrowOnDeviceType={["tablet", "bigmobile", "mobile"]}
      >
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
