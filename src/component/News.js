import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

const News = (props) => {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
    
    const updateNews=async()=>{
      const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
      setLoading(true)
      let data = await fetch(url);
      let parsedData = await data.json()
      setArticles(parsedData.articles)
      setTotalResults(parsedData.totalResults)
      setLoading(false) 
    }
    
    useEffect(() => {
      updateNews();
    }, [])
  
    const fetchData = async () =>{
      setPage(page + 1)
      const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
      let data = await fetch(url);
      let parsedData = await data.json()
      setArticles(articles.concat(parsedData.articles))
      setTotalResults(parsedData.totalResults)

    }


    return (
      <>
        <h2 className="sm:ml-3 max-w-7xl mx-auto font-mono py-5 text-3xl text-bold">
          NewsApp - Top News /{props.category} 
        </h2>

        <InfiniteScroll
          dataLength={articles.length} //This is important field to render the next data
          next={fetchData}
          hasMore={articles.length != totalResults}
          loader={<Spinner/>}
          >
        <div className=" max-w-7xl mx-auto md:grid grid-cols-3 block items-center ">
          {!loading && articles.map((element) => {
            return (
              <div key={element.url}>
                <NewsItem
                  title={element.title}
                  description={element.description}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                  source={element.source.name}
              />
              </div>
              
            );
          })}
        </div>
        </InfiniteScroll>
      </>
    );
  


}
News.defaultProps = {
  country: 'in',
  pageSize: 5,
  category: 'Sports'
}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string
}
export default News