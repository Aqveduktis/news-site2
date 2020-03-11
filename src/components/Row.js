import React from 'react'
import { Article } from 'components/Article'
// import './app.css'
import newsJson from '../news.json'

export const Row = () => (
    <div className="row">
    {newsJson.articles.map((article) => (
      <Article
        key={article.title}
        article={article} />
    ))}
  </div>
)