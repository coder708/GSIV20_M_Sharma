import React from "react";

const IMG_API = "https://image.tmdb.org/t/p/w1280";

const Movie = ({
  original_title,
  release_date,
  overview,
  title,
  poster_path,
  vote_average,
  key,
}) => {
  return (
    <div className="movie">
      <img src={IMG_API + poster_path} alt={title} />
      <div className="movie_info">
        <h3>
          <b>Title:</b> {title}
        </h3>
        <h4>Release-Date: {release_date}</h4>
        <h4>Original-Title: {original_title}</h4>
        <span>Vote: {vote_average}</span>
      </div>
      <div className="movie-over">
        <h2>overview</h2>
        <p>{overview}</p>
      </div>
    </div>
  );
};

export default Movie;
