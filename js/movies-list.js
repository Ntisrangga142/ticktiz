
const API_KEY = 'dfcf99a36e085314a7ec608c88ca14ed';

/* Fetch Popular Movies */
const getPopularMovies = async (apiKey) => {
  const storageMovies = localStorage.getItem("popularMovies");

  if (storageMovies) {
    return JSON.parse(storageMovies);
  }

  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`
    );

    const dataMovies = response.data.results;
    localStorage.setItem("popularMovies", JSON.stringify(dataMovies));

    return dataMovies;
  } catch (error) {
    console.error("Error Fetching Movies : ", error);
  }
};

/* Fetch genreMovies */
const getGenre = async (apiKey) => {
  const storageMovies = localStorage.getItem("genreMovies");

  if (storageMovies) {
    return JSON.parse(storageMovies);
  }

  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`
    );

    const dataGenreMovies = response.data.genres;
    localStorage.setItem("genreMovies", JSON.stringify(dataGenreMovies));

    return dataGenreMovies;
  } catch (error) {
    console.error("Error Fetching Movies : ", error);
  }
};


const setListMovies = async (apiKey) => {
  const dataMovies = await getPopularMovies(apiKey);
  const dataGenre = await getGenre(apiKey);
    console.log(dataMovies)
  const cardContainer = document.querySelector(".movies-card");

  dataMovies.slice(0,4).forEach((movie) => {
    const cardMovies = document.createElement("div");


    cardMovies.innerHTML = `
      <div>
            <img src="https://image.tmdb.org/t/p/original${movie.backdrop_path}" alt="movie-1">
            <div class="background-hover"></div>
            <div>
                <a href="./details.html?id=${movie.id}" >Details</a>
                <a href="#">Buy Ticket</a>
            </div>
        </div>
        <h3>${movie.title}</h3>
        <ul>
        </ul>
      `;

    const cardTags = cardMovies.querySelector("ul");

    const findGenre = movie.genre_ids.map((id) => {
      const genre = dataGenre.find((genre) => genre.id === id);
      const tagsGenre = document.createElement("list");
      tagsGenre.innerText = `${genre.name}`;

      return tagsGenre;
    });

    findGenre.slice(0, 3).forEach((tag) => {
      cardTags.appendChild(tag);
    });

    cardContainer.appendChild(cardMovies);
  });
};

setListMovies(API_KEY);

(async () => {
    

})();