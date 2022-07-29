import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let {title, description, imageUrl, newsUrl} = this.props
    return (
      <div className='sm:px-2 px-1 py-3 sm:flex sm:justify-center'>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img className="w-full" src={imageUrl} alt="Sunset in the mountains" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{title}</div>
            <p className="text-gray-700 text-base">
              {description}
            </p>
          <div className='mt-3'>
              <a className="bg-blue-300 px-2 py-2 rounded transition hover:bg-blue-500 hover:underline shadow"
                href={newsUrl} target="_blank">
                More-Info
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
