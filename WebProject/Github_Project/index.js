const ApiUrl = 'https://api.github.com/users/'
const form = document.getElementById('form')
const search = document.getElementById('search')
const main = document.getElementById('main')
// getUser('bradtraversy')
// function getUser(username) {
//     axios.get(ApiUrl + username)
//     .then(res => console.log(res))
//     .catch(err => console.log(err))
// }

async function getUser(username) {
    try {
        const { data } = await axios(ApiUrl + username)
        createUserCard(data)
    } catch (err) {
        if(err.response.status === 404){
            createErrorCard('No profile with this name')
        }
    }
}

function createErrorCard(msg) {
    const cardHTML = `
    <div class="card">
    <h1>${msg}</h1>
    </div>
    `

    main.innerHTML = cardHTML
}

async function getRepos(username) {
    try {
        const { data } = await axios(ApiUrl + username)
        createUserCard(data)
    } catch (err) {
           createErrorCard('problem fetchin repos')
        
    }
}

function createUserCard(user) {
    const cardHTML = `<div class="card">
      <img class="avatar" src=${user.avatar_url} alt="">

      <div class="user-info">
        <h2>${user.name}</h2>
        <p>${user.bio}</p>

        <ul>
          <li>${user.followers} <strong></strong></li>
          <li>${user.following}<strong></strong></li>
          <li>${user.public_repos}<strong></strong></li>
        </ul>

        <div class="repos">
          <a href="#" class="repo">Repo 1</a>
          <a href="#" class="repo">Repo 2</a>
          <a href="#" class="repo">Repo 3</a>
        </div>
      </div>
    </div>
    `
    main.innerHTML = cardHTML

}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const user = search.value
    if (user) {
        getUser(user)
        search.value = ''
    }
})
