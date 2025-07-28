const API_KEY = 'dfcf99a36e085314a7ec608c88ca14ed';

/* Fetch Movies Details */
const getMovieDetails = async (apiKey, movieId) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`
    );

    const dataMovieDetails = response.data;

    return dataMovieDetails;
  } catch (error) {
    console.error("Error Fetching Movies : ", error);
  }
};

/* Fetch Movies Credits */
const getMoviesCredits = async (apiKey, movieId) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}`
    );

    const dataMovieCredits = response.data;
    return dataMovieCredits;
  } catch (error) {
    console.error("Error Fetching Movies : ", error);
  }
};

/* Set Movie Details */
const setMovieDetails = async (apiKey) => {
  const urlParams = new URLSearchParams(window.location.search);
  const movieId = urlParams.get("id");

  const dataMovies = await getMovieDetails(apiKey, movieId);
  const movieCredits = await getMoviesCredits(apiKey, movieId);

  /* Set Movies Jumbotron IMG */
  const main = document.querySelector("main > div:nth-child(1)");
  main.style.background = `
   linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
   url("https://image.tmdb.org/t/p/original${dataMovies.backdrop_path}")
  `;
  main.style.backgroundPosition = "50% 15%";

  /* Set Movies Poster */

  const getPoster = document.querySelector("main > div:nth-child(2) > img");
  getPoster.setAttribute("alt", `${dataMovies.title}`);
  getPoster.setAttribute(
    "src",
    `https://image.tmdb.org/t/p/original${dataMovies.backdrop_path}`
  );

  /* Set Movie Titles */
  const getMovieTitle = document.querySelector("main > div:nth-child(3) > h1");
  getMovieTitle.innerText = `${dataMovies.title}`;

  /* Set Movies Tag */
  const cardTags = document.querySelector("main > div:nth-child(3) > ul");

  dataMovies.genres.slice(0, 3).forEach((tag) => {
    const tagsGenre = document.createElement("li");
    tagsGenre.innerText = tag.name;
    cardTags.appendChild(tagsGenre);
  });

  /* Set Movies Release Date */
  const getReleaseDate = document.querySelector("main > div:nth-child(3) > div:nth-child(3) > div:nth-child(1) > p");
  getReleaseDate.innerText = `${dataMovies.release_date}`;

  const duration = dataMovies.runtime.toString();
  const hours = duration.slice(0, 1);
  const minutes = duration.slice(1);
  const getDuration = document.querySelector("main > div:nth-child(3) > div:nth-child(3) > div:nth-child(3) > p");

  getDuration.innerText = `${hours} hours ${minutes} minutes`;

  /* Set Director Name */
  const getSynopsis = document.querySelector("main > div:nth-child(4) > p");
  getSynopsis.innerText = `${dataMovies.overview}`;

  const director = movieCredits.crew.find(
    (person) => person.job === "Director"
  );

  const getDirector = document.querySelector("main > div:nth-child(3) > div:nth-child(3) > div:nth-child(2) > p");
  getDirector.innerText = `${director.name}`;

  /* Set Cast name */
  const cast = movieCredits.cast.slice(0, 3);
  const castName = cast.map((artist) => artist.name).join(", ");

  const getCast = document.querySelector("main > div:nth-child(3) > div:nth-child(3) > div:nth-child(4) > p");
  getCast.innerText = `${castName}`;
};

setMovieDetails(API_KEY);