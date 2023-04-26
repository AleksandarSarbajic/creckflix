import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MovieItem from "./MovieItem";
import { useCallback } from "react";

export default function MovieItemList(props) {
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
      items: 5,
    },
    desktop: {
      breakpoint: { max: 1600, min: 900 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 900, min: 650 },
      items: 3,
    },
    bigmobile: {
      breakpoint: { max: 650, min: 500 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 500, min: 0 },
      items: 1,
    },
  };

  return (
    <div style={{ margin: "-5rem 0 4rem 0" }}>
      <h2 className="trendin">{props.title}</h2>
      <Carousel
        responsive={responsive}
        ssr={true}
        containerClass="carousel"
        removeArrowOnDeviceType={["tablet", "bigmobile", "mobile"]}
      >
        {props.movies.map((movie) => (
          <MovieItem
            id={movie.id}
            key={movie.id}
            image={movie.preview}
            name={movie.name}
            insertMovie={insertMovie}
            user={props.user}
          />
        ))}
      </Carousel>
    </div>
  );
}

//da napravim ispod browse dinamicnu stranu
