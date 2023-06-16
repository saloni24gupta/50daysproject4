const APIURL = 'https://api.github.com/users/'
const form = document.getElementById('form')
const search = document.getElementById('search')
const main = document.getElementById('main')
// method1
// function getUser(username) {
//    axios(APIURL + username)
//       .then(res => console.log(res))
//       .catch(err => console.log(err))
// }

//  method2
// async function getUser(username) {
//     const res = await axios(APIURL + username)
//     console.log(res.data)

//  }

// method 3
// async function getUser(username) {
//     const {data} = await axios(APIURL + username)
//     console.log(data)

//  }
// method 4
async function getUser(username) {
    try {
        const { data } = await axios(APIURL + username)
        createUserCard(data)
    }
    catch (err) {
        if (err.response.status === 404) {
            createErrorCard('No Profile with this user name')
        }
    }

}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const user = search.value
    if (user) {
        getUser(user)
        search.value = ''
    }
})

function createUserCard(user) {
    const cardHTML = ` <div class="card">
    <div>
        <img src="${user.avatar_url}" alt="${user.name}" class="avatar">
    </div>
    <div class="user-info">
        <h2>${user.name}</h2>
        ${user.bio}
        <ul>
            <li>${user.followers}<strong>followers</strong></li>
            <li>${user.following}<strong>Following</strong></li>
            <li>${user.public_repos}<strong>Repos</strong>
            </li>
        </ul>
        <div class="repos">
            <a href="#" class="repo">Repo 1</a>
            <a href="#" class="repo"> Repo 2</a>
            <a href="#" class="repo">Repo 3</a>
        </div>
    </div>
</div>
    `

    main.innerHTML = cardHTML
}

async function getRepos(username) {
    try {
        const { data } = await axios(APIURL + username + '/repos')
        createUserCard(data)
    }
    catch (err) {
        createErrorCard('Problem fetching repos')
    }
}

function createErrorCard(msg) {
    const cardHTML = `
    <div class="card">
    <h1>${message}</h1>
    </div>
    
    `
    main.innerHTML = cardHTML
}