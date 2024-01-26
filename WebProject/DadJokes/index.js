const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')
// const api_url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=02ceb65115d64a8190ca3567b3773afa'
const api_url = 'https://icanhazdadjoke.com/'
// generateJoke() 
jokeBtn.addEventListener('click', generateJoke)

 generateJoke() 
async function generateJoke() {
    const config = {
                headers: {
                    Accept: 'application/json'
                },
            }
   const res =  await fetch('https://icanhazdadjoke.com/', config)
   const data = await res.json();
   console.log(data);
   jokeEl.innerHTML = data.joke
}

//     const config = {
//         headers: {
//             Accept: 'application/json'
//         },
//     }

//     fetch('https://icanhazdadjoke.com/', config)
//     .then((res) => res.json())
//     .then((data) => console.log(data))
// }

// 