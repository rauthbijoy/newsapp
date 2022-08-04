import React from 'react'
import noImage from './noImage.jpg'

const NewsItem = (props) => {

    let {title, description, imageUrl, newsUrl, author, date, source} = props
    return (
      <div className='sm:px-2 px-1 py-3 sm:flex sm:justify-center'>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">{source}</span>
          <img className="w-full" src={imageUrl?imageUrl:noImage} alt="Sunset in the mountains" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{title}</div>
            <p className="text-gray-700 text-base">
              {description}
            </p>
            <p className='mt-1 text-sm text-gray-300'>by {author?author:"Unknown"} on {new Date(date).toGMTString()}</p>
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

export default NewsItem
