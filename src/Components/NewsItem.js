import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {
   let {title, description, imageUrl, newsUrl} = this.props;
    return (
        <div className="my-3">
          <div className="card">
            <img src={!imageUrl?"https://fdn.gsmarena.com/imgroot/news/24/07/google-pixel-9-family-storage-battery-charging-leak/-952x498w6/gsmarena_000.jpg":imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description}...</p>
                {/* <p class="card-text"><small class="text-muted">By {author? "Unknown": author } on {date}</small></p> */}
                <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More.</a>
            </div>
          </div>
      </div>
    )
  }
}

export default NewsItem
