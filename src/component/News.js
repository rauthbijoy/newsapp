import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
  render() {
    return (
      <>
        <h2 className='font-mono py-5 px-20 text-4xl'>NewsApp - Top News </h2>
      <div className='max-w-7xl md:grid grid-cols-3 block'>
        <NewsItem/>
      </div>
      </>
    )
  }
}
