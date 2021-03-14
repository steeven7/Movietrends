const key = '723c849121d214ebd66ccfd0fb6bbb31';
const trending = `https://api.themoviedb.org/3/trending/movie/week?api_key=${key}&page=1`;
const backdrop = 'https://image.tmdb.org/t/p/w500/';
const filmUI = document.querySelector('.movieTrend');
const primaryTitle = document.querySelector('.primary-title')

const posters = function(url, title, rating, overview, release) {
	const item = document.createElement('div');
	const filmTitle = document.createElement('div');
	const filmImg = document.createElement('img');
	const filmDesc = document.createElement('div');
	const filmrating = document.createElement('div');
	const overlay = document.createElement('div');
	const details = document.createElement('div');

	// ADD CLASSES
	filmrating.className = 'rate';
	filmDesc.className = 'desc';
	filmTitle.className = 'filmtitle';
	filmImg.className = 'posterimg';
	item.className = 'item';
	overlay.className = 'overlay';
	details.className = 'details space-small'

	//ADD INFO
	filmImg.src = `${backdrop}${url}`;
	filmTitle.innerHTML = `<h2>${title}</h2>`;
	filmrating.innerHTML = ` <h3>Release: ${release}</h3><h3>Rating: ${rating}</h3>`;
	filmDesc.innerHTML =  `${overview}</p>`;

	//APPEND TO UI
	filmUI.appendChild(item);
	item.appendChild(filmImg);
	item.appendChild(overlay);
	overlay.append(details);
	details.append(filmTitle);
	details.append(filmrating);
	details.append(filmDesc);


};

fetch(trending).then((response) => response.json()).then((data) => {
	const movies = data.results;

	movies.forEach((movie) => {
		posters(movie.poster_path, movie.title, movie.vote_average, movie.overview, movie.release_date);
	});
});


				
					
