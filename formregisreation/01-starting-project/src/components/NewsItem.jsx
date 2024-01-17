import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let { title, discription, imageUrl, newsUrl } = this.props
    return (
      <div className='my-3'>
        <div className="card" style={{ width: "18rem" }}>
          <img src={!imageUrl?"https://www.hindustantimes.com/ht-img/img/2024/01/15/1600x900/delhi-lockdown-covid-19-day-25_e0bc9702-852f-11ea-a351-6978c1d205f3_1705330828119.JPG":imageUrl} className="card-img-top"  alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{discription}</p>
            <a href={newsUrl} target='_blank' className="btn btn-sm btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    )
  }
}
