// const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=4e39a2ec6ea15ebb0f351543d21f16fc&page=1';
const API_URL = 'https://newsapi.org/v2/everything?q=bitcoin&apiKey=02ceb65115d64a8190ca3567b3773afa'
// const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=4e39a2ec6ea15ebb0f351543d21f16fc&q="';
const url = 'https://www.wired.com/story/telegram-covid-19-vaccination-fakes/'
const form = document.getElementById('form')
const search = document.getElementById('search')
const main = document.getElementById('main')
const img = url;
getMovies(API_URL)
async function getMovies(url) {
    const res = await fetch(url)
    const data = await res.json()
    showMovies(data.articles)
}

function showMovies(movies) {
    main.innerHTML = ''

    movies.forEach((movie) => {
        const { url, urlToImage,  description, author} = movie
        const movieEl = document.createElement('div')
        movieEl.classList.add('movie')
        movieEl.innerHTML = `
       
        <img src="${url + urlToImage}" alt="">
        <div class="movie-info">
            <h3>${author}</h3>
           
        </div>
        <div class="overview">
        ${description}  
        </div>
 
        `
        main.appendChild(movieEl)
     })

}
form.addEventListener('submit', (e) => {
    e.preventDefault()

    const searchTerm = search.value

    if(searchTerm && searchTerm !== ' '){
        getMovies(SEARCH_API + searchTerm)
        search.value = ''
    }  else {
        window.location.reload()
    }
})

function getClassByRate(vote) {
    if(vote >= 8 ) {
return 'green'
    }
     else if (vote >= 5) {
        return 'orange'
     } else 
     return 'red'
}