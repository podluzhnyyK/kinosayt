const API_KEY = '8bffc7c0-7613-4c53-9c1d-80e110be2b62';
const TOP_100_POPULAR_FILMS =
  'https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1';

async function getMovies(url) {
  const resp = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      'X-API-KEY': API_KEY,
    }
  })
  const respData = await resp.json();

  console.log(respData);

  showMovies(respData);

}

function showMovies(data) {

  const main = document.querySelector('.main');

  data.films.forEach((movie) => {
    const movieEl = document.createElement('div');
    movieEl.className = 'movie';
    movieEl.innerHTML = `
    <div class="movie">
      <div class="movie__img-wrap">
        <span class="movie__rating">${movie.rating}</span>
        <img class="movie__img" src="${movie.posterUrl}" width="300" height="425" alt="poster">
      </div>

      <div class="movie__info">
        <h3 class="movie__name">
          <a class="movie__link" href="https://www.kinopoisk.ru/film/${movie.filmId}/" target="_blank" rel="nofollow noopener">${movie.nameRu}
          <svg xmlns="http://www.w3.org/2000/svg" fill="#ffbb03" viewBox="0 0 24 24" width="14px" height="14px"><path d="M 5 3 C 3.9069372 3 3 3.9069372 3 5 L 3 19 C 3 20.093063 3.9069372 21 5 21 L 19 21 C 20.093063 21 21 20.093063 21 19 L 21 12 L 19 12 L 19 19 L 5 19 L 5 5 L 12 5 L 12 3 L 5 3 z M 14 3 L 14 5 L 17.585938 5 L 8.2929688 14.292969 L 9.7070312 15.707031 L 19 6.4140625 L 19 10 L 21 10 L 21 3 L 14 3 z"/></svg>
          </a>

        </h3>
        <p class="movie__category">${movie.genres.map(genre => ` ${genre.genre}`)}</p>
      </div>
    </div>
    `;

    main.append(movieEl);

  })

}

getMovies(TOP_100_POPULAR_FILMS);


