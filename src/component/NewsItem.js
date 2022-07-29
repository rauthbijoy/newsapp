import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let {title, description, imageUrl, } = this.props
    return (
      <div className='px-16'>
      <div className='px-3 py-5'>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img className="w-full" src={imageUrl} alt="Sunset in the mountains" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{title}</div>
            <p className="text-gray-700 text-base">
              {description}
            </p>
          </div>
        </div>
      </div>
      </div>
    )
  }
}
