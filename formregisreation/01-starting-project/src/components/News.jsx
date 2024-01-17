import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {

  articles = [
    {
      "source": {
        "id": null,
        "name": "India.com"
      },
      "author": "Zee News Desk",
      "title": "LIVE Updates | IND Vs AFG, 1st T20I Cricket Match Live Score: Watch Out For Rohit Sharma - Zee News",
      "description": "LIVE Updates | IND Vs AFG, 1st T20I Cricket Match Live Score: What Time Will Match Begin?",
      "url": "https://zeenews.india.com/cricket/live-updates/live-cricket-score-ind-vs-afg-1st-t20i-match-cricket-match-today-india-vs-afghanistan-cricket-live-score-updates-pca-stadium-mohali-rohit-sharma-ibrahim-zadran-2708463",
      "urlToImage": "https://english.cdn.zeenews.com/sites/default/files/2024/01/10/1347877-ind-2024-01-10t213912.525.png",
      "publishedAt": "2024-01-11T10:27:46Z",
      "content": null
    },
    {
      "source": {
        "id": null,
        "name": "Hindustan Times"
      },
      "author": "PTI",
      "title": "Sandeep Lamichhane arrested in Kathmandu, Nepal cricket body suspends him - Hindustan Times",
      "description": "Lamichhane's lawyer Saroj Ghimire was quoted as saying by 'The Kathmandu Post' that the cricketer \"will appeal the decision in a higher court.\" | Cricket",
      "url": "https://www.hindustantimes.com/cricket/sandeep-lamichhane-arrested-in-kathmandu-nepal-cricket-body-suspends-former-captain-after-conviction-in-rape-case-101704956280091.html",
      "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/01/11/1600x900/FILES-CRICKET-NEPAL-CRIME-0_1704956493004_1704956534761.jpg",
      "publishedAt": "2024-01-11T07:06:09Z",
      "content": "Nepal spinner Sandeep Lamichhane was on Thursday suspended by the country's cricket body after being sentenced to eight years in prison for raping an 18-year-old woman.\r\n(FILES) Nepali former nationa… [+1481 chars]"
    },

    {
      "source": {
        "id": null,
        "name": "India.com"
      },
      "author": "Zee News Desk",
      "title": "LIVE Updates | IND Vs AFG, 1st T20I Cricket Match Live Score: Watch Out For Rohit Sharma - Zee News",
      "description": "LIVE Updates | IND Vs AFG, 1st T20I Cricket Match Live Score: What Time Will Match Begin?",
      "url": "https://zeenews.india.com/cricket/live-updates/live-cricket-score-ind-vs-afg-1st-t20i-match-cricket-match-today-india-vs-afghanistan-cricket-live-score-updates-pca-stadium-mohali-rohit-sharma-ibrahim-zadran-2708463",
      "urlToImage": "https://english.cdn.zeenews.com/sites/default/files/2024/01/10/1347877-ind-2024-01-10t213912.525.png",
      "publishedAt": "2024-01-11T10:27:46Z",
      "content": null
    },
    {
      "source": {
        "id": null,
        "name": "Hindustan Times"
      },
      "author": "PTI",
      "title": "Sandeep Lamichhane arrested in Kathmandu, Nepal cricket body suspends him - Hindustan Times",
      "description": "Lamichhane's lawyer Saroj Ghimire was quoted as saying by 'The Kathmandu Post' that the cricketer \"will appeal the decision in a higher court.\" | Cricket",
      "url": "https://www.hindustantimes.com/cricket/sandeep-lamichhane-arrested-in-kathmandu-nepal-cricket-body-suspends-former-captain-after-conviction-in-rape-case-101704956280091.html",
      "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/01/11/1600x900/FILES-CRICKET-NEPAL-CRIME-0_1704956493004_1704956534761.jpg",
      "publishedAt": "2024-01-11T07:06:09Z",
      "content": "Nepal spinner Sandeep Lamichhane was on Thursday suspended by the country's cricket body after being sentenced to eight years in prison for raping an 18-year-old woman.\r\n(FILES) Nepali former nationa… [+1481 chars]"
    }
  ]
  constructor() {
    super();
    console.log("vc  hgjhgh g gjghgh ")
    this.state = {
      articles: this.articles,
      loading: false
    }
  }
  async componentDidMount() {

    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=02ceb65115d64a8190ca3567b3773afa"
    let data = await fetch(url);
    let parsedData = await data.json();
  console.log(parsedData)
    this.setState({ articles: parsedData.articles })
  }

  handlePrevClick =  async () => {
    console.log("prev")
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=02ceb65115d64a8190ca3567b3773afa&page=${this.state.page - 1}`
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    // this.setState({ articles: parsedData.articles })
    this.setState({
     page: this.state.page - 1,
     articles: parsedData.articles
    })
  }
 
 handleNextClick = async () => {
  console.log("next")
  let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=02ceb65115d64a8190ca3567b3773afa&page=${this.state.page + 1}`
  let data = await fetch(url);
  let parsedData = await data.json();
  console.log(parsedData)
  // this.setState({ articles: parsedData.articles })
  this.setState({
   page: this.state.page + 1,
   articles: parsedData.articles
  })
  }
  render() {
    console.log("render")
    return (

      <div className='container my-3'>
        <h2>NewsMonkey - Top Headlines</h2>
        <div className="row">
          {this.state.articles.map((element) => {
            return <div className="col-md-4" key={element.url}>
              <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage} newsUrl={element.url} />
            </div>
          })}
        </div>
<div className="container d-flex justify-content-between">
  <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
  <button type="button" className='btn btn-dark' onClick={this.handleNextClick}>Next &rarr;</button>
</div>
      </div>
    )
  }
}
