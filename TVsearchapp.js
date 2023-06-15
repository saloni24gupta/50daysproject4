const search = document.querySelector('#searchform')
search.addEventListener('submit', async function (e) {
    e.preventDefault();
    // console.log(search.elements.querry.value)
    const searchTerm = search.elements.querry.value;
    const config = { params: { q: searchTerm } }
    // console.log(searchTerm)
    const res = await axios.get(`https://api.tvmaze.com/search/shows`, config)
   makeImages(res.data)
   search.elements.querry.value = ''
   
//    console.log(searchTerm)
   
//    const response = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchTerm}`)
//    const ranking = document.createElement('span')
//    ranking = response.data[0].show.rating.average;
//    document.body.append(ranking)
//    console.log(response.data[0].show.rating.average)
})

const makeImages = (shows) => {
    for (let result of shows) {
        if(result.show.image) {
        const img = document.createElement('IMG')
        img.src = result.show.image.medium;
        document.body.append(img)
        }
    }
}