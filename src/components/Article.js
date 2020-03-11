import React from 'react'
import { Eye } from 'icons/Eye'
import './article.css'

// background - image: url(http://image.jpg);
export const Article = (props) => {
  const { title, url, urlToImage } = props.article  
  return (
  <div
    className="col-sm-6 col-md-4 col-lg-3 article">
    <h1>{title}</h1>
<img className="card" src = {urlToImage}></img>  
      <a href={url}>More information</a>
  </div>
)
}
