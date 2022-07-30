import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export default class News extends Component {
    articles= [
    {
      "source": {
        "id": "techcrunch",
        "name": "TechCrunch"
      },
      "author": "Lauren Forristal",
      "title": "Roku points finger at advertising slowdown for missing the mark on quarterly results",
      "description": "In this current climate, Roku needed a win. Despite the company reporting total net revenue growth of 18% year-over-year to $764 million– a nice increase from $737.7 million last quarter—the company missed Wall Street’s expectations. Analysts expected revenue…",
      "url": "https://techcrunch.com/2022/07/28/roku-points-finger-at-advertising-slowdown-for-missing-the-mark-on-quarterly-results/",
      "urlToImage": "https://techcrunch.com/wp-content/uploads/2022/07/1563833464896.jpg?w=533",
      "publishedAt": "2022-07-28T22:40:45Z",
      "content": "In this current climate, Roku needed a win. Despite the company reporting total net revenue growth of 18% year-over-year to $764 million– a nice increase from $737.7 million last quarterthe company m… [+3514 chars]"
    },
    {
      "source": {
        "id": "techcrunch",
        "name": "TechCrunch"
      },
      "author": "Haje Jan Kamps",
      "title": "Daily Crunch: Indian government orders Apple, Google to delist popular game BGMI from app stores",
      "description": "Hello, friends, and welcome to Daily Crunch, bringing you the most important startup, tech and venture capital news in a single package.",
      "url": "https://techcrunch.com/2022/07/28/daily-crunch-indian-government-orders-apple-google-to-delist-popular-game-bgmi-from-app-stores/",
      "urlToImage": "https://techcrunch.com/wp-content/uploads/2022/07/GettyImages-1233574111.jpg?w=594",
      "publishedAt": "2022-07-28T22:05:47Z",
      "content": "To get a roundup of TechCrunchs biggest and most important stories delivered to your inbox every day at 3 p.m. PDT,subscribe here.\r\nWhy, hello there, and welcome back to another installment of the Da… [+5769 chars]"
    },
    {
      "source": {
        "id": "techcrunch",
        "name": "TechCrunch"
      },
      "author": "Aisha Malik",
      "title": "Apple's services revenue growth slows to $19.6B in Q3, reaches 860M paid subscriptions",
      "description": "Apple released its third-quarter earnings on Thursday and reported $19.6 billion in services revenue, marking a 12% year-over-year increase, but narrowly falling short of Wall Street predictions of about $19.7 billion. The tech giant’s third-quarter services …",
      "url": "https://techcrunch.com/2022/07/28/apples-services-revenue-growth-slows-to-19-6b-in-q3-reaches-860m-paid-subscriptions/",
      "urlToImage": "https://techcrunch.com/wp-content/uploads/2018/05/gettyimages-915808896.jpeg?w=582",
      "publishedAt": "2022-07-28T21:29:35Z",
      "content": "Apple released its third-quarter earnings on Thursday and reported $19.6 billion in services revenue, marking a 12% year-over-year increase, but narrowly falling short of Wall Street predictions of a… [+1863 chars]"
    },
    {
      "source": {
        "id": "techcrunch",
        "name": "TechCrunch"
      },
      "author": "Lauren Forristal",
      "title": "Amazon's shares rise on earnings beat, despite $2B loss",
      "description": "E-commerce giant Amazon reported its second-quarter results today, and despite inflation and a net loss of $2 billion, the results were surprisingly better than expected. Much of the loss is chalked up to Amazon’s stake in Rivian. The second quarter net loss …",
      "url": "https://techcrunch.com/2022/07/28/amazons-shares-rise-on-earnings-beat-despite-2b-loss/",
      "urlToImage": "https://techcrunch.com/wp-content/uploads/2020/11/GettyImages-1211125072.jpg?w=601",
      "publishedAt": "2022-07-28T21:25:52Z",
      "content": "E-commerce giant Amazon reported its second-quarter results today, and despite inflation and a net loss of $2 billion, the results were surprisingly better than expected. Much of the loss is chalked … [+2789 chars]"
    },
    {
      "source": {
        "id": "techcrunch",
        "name": "TechCrunch"
      },
      "author": "Sarah Perez",
      "title": "YouTube's new tool lets creators turn their own videos into Shorts",
      "description": "YouTube wants to quickly ramp up the number of short-form “Shorts” videos available on its platform in order to better compete with TikTok. To aid with this effort, the company is today rolling out a new creator tool that turns existing YouTube videos into Sh…",
      "url": "https://techcrunch.com/2022/07/28/youtubes-new-tool-lets-creators-turn-their-own-videos-into-shorts/",
      "urlToImage": "https://techcrunch.com/wp-content/uploads/2022/07/youtube-shorts-creator-tool.png?w=764",
      "publishedAt": "2022-07-28T20:54:12Z",
      "content": "YouTube wants to quickly ramp up the number of short-form “Shorts” videos available on its platform in order to better compete with TikTok. To aid with this effort, the company is today rolling out a… [+2825 chars]"
    },
    {
      "source": {
        "id": "techcrunch",
        "name": "TechCrunch"
      },
      "author": "Brian Heater",
      "title": "iPhone revenue up slightly for Q3, as other hardware categories lose steam",
      "description": "A mixed bag in hardware land as Apple reports its third quarter profits today. In spite of lowered expectations, iPhone revenue was up slightly year-over-year, from $39.5 billion to $40.7 billion — amounting to a 3% jump from the same time period in 2021. But…",
      "url": "https://techcrunch.com/2022/07/28/iphone-revenue-up-slightly-for-q3-as-other-hardware-categories-lose-steam/",
      "urlToImage": "https://techcrunch.com/wp-content/uploads/2021/06/wwdc-2021-tim-cook-crowd-e1623094087992.jpg?w=764",
      "publishedAt": "2022-07-28T20:51:44Z",
      "content": "A mixed bag in hardware land as Apple reports its third quarter profits today. In spite of lowered expectations, iPhone revenue was up slightly year-over-year, from $39.5 billion to $40.7 billion — a… [+2139 chars]"
    },
    {
      "source": {
        "id": "techcrunch",
        "name": "TechCrunch"
      },
      "author": "Amanda Silberling",
      "title": "Instagram's Dual camera feature copies BeReal, but misses the point",
      "description": "BeReal is more about friends than photos",
      "url": "https://techcrunch.com/2022/07/28/instagram-dual-camera-feature-copies-bereal-misses-point/",
      "urlToImage": "https://techcrunch.com/wp-content/uploads/2022/07/Press-Asset-02-Camera-Updates-EN.webp?w=600",
      "publishedAt": "2022-07-28T20:51:13Z",
      "content": "We know the drill: Snapchat adds the Stories feature, Instagram nabs it. TikTok gets too popular, Instagram pivots to short-form video. Now, here’s another one for the list. This week, Instagram quie… [+6921 chars]"
    },
    {
      "source": {
        "id": "techcrunch",
        "name": "TechCrunch"
      },
      "author": "Natasha Mascarenhas",
      "title": "Career Karma conducts layoffs as tech jobs face a massive stress test",
      "description": "Learning navigation platform Career Karma has laid off 60 people across its United States and global teams, CEO and co-founder Ruben Harris confirmed to TechCrunch. While he did not share the percentage total of those impacted, estimates via LinkedIn show tha…",
      "url": "https://techcrunch.com/2022/07/28/career-karma-conducts-layoffs-as-tech-jobs-face-a-massive-stress-test/",
      "urlToImage": "https://techcrunch.com/wp-content/uploads/2021/08/GettyImages-173504445-1.jpg?w=545",
      "publishedAt": "2022-07-28T20:49:29Z",
      "content": "Learning navigation platform Career Karma has laid off 60 people across its United States and global teams, CEO and co-founder Ruben Harris confirmed to TechCrunch. While he did not share the percent… [+2624 chars]"
    },
    {
      "source": {
        "id": "techcrunch",
        "name": "TechCrunch"
      },
      "author": "Devin Coldewey",
      "title": "After 50 years pioneering satellite imagery, NASA's Landsat is ready for 50 more",
      "description": "NASA’s Landsat satellites have consistently made history in Earth observation since the project’s first launch in 1972, with this year marking 50 years of innovation and science. Its influence may surprise you, as will its continued relevance in the face of a…",
      "url": "https://techcrunch.com/2022/07/28/after-50-years-pioneering-satellite-imagery-nasas-landsat-is-ready-for-50-more/",
      "urlToImage": "https://techcrunch.com/wp-content/uploads/2022/07/Landsat_arcbg_1920x1080ch2.jpg?w=607",
      "publishedAt": "2022-07-28T20:33:54Z",
      "content": "NASA’s Landsat satellites have consistently made history in Earth observation since the project’s first launch in 1972, with this year marking 50 years of innovation and science. Its influence may su… [+9399 chars]"
    },
    {
      "source": {
        "id": "techcrunch",
        "name": "TechCrunch"
      },
      "author": "Brian Heater",
      "title": "CHIPS Act passes House on way to Biden signing",
      "description": "Following a strong showing of bipartisan support in the Senate, the CHIPS Act staved off last minute attempts by the GOP House leadership to derail its passage. Congress’ lower chamber approved the $280 billion bill by a vote of 243-to-187. Twenty-four House …",
      "url": "https://techcrunch.com/2022/07/28/chips-act-passes-house-on-way-to-biden-signing/",
      "urlToImage": "https://techcrunch.com/wp-content/uploads/2021/05/GettyImages-1232560316.jpeg?w=600",
      "publishedAt": "2022-07-28T19:35:47Z",
      "content": "Following a strong showing of bipartisan support in the Senate, the CHIPS Act staved off last minute attempts by the GOP House leadership to derail its passage. Congress lower chamber approved the $2… [+1418 chars]"
    }
    ]
    
    static defaultProps = {
      country: 'in',
      pageSize: 5,
      category: 'Sports'
    }

    static propTypes = {
      country: PropTypes.string,
      pageSize: PropTypes.number,
      category: PropTypes.string
    }

    constructor(){
      super();
      console.log('this is the constructor')
      this.state = {
        articles: this.articles,
        page: 1,
        pageSize: 10,
        loading: false
      }
    }
    
    async componentDidMount(){
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f011d18a507a48fcb063644ac134a24c&page=1&pageSize=${this.props.pageSize}`;
      this.setState({loading: true});
      let data = await fetch(url);
      let parsedData = await data.json()
      this.setState({articles: parsedData.articles,
        totalResults: parsedData.totalResults,
      loading: false})  
    }
    
    handlePrevClick= async() =>{
        console.log('prev')
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f011d18a507a48fcb063644ac134a24c&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({loading: true});
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({
          page: this.state.page - 1,
          articles: parsedData.articles,
          loading: false
        })
    }

    handleNextClick= async() => {
        console.log('next')
        if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))){   
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f011d18a507a48fcb063644ac134a24c&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        this.setState({loading: true});
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({
          page: this.state.page + 1,
          articles: parsedData.articles,
          loading: false
        })
      }
    }


  render() {
    return (
      <>
        <h2 className="max-w-7xl mx-auto font-mono py-5 text-5xl text-bold">
          NewsApp - Top News{" "}
        </h2>
        {this.state.loading && <Spinner/> }
        <div className=" max-w-7xl mx-auto md:grid grid-cols-3 block items-center ">
          {!this.state.loading && this.state.articles.map((element) => {
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
        {/* previous and next button goes here for the page */}
        <div className="sm:px-3 flex justify-between max-w-7xl mx-auto items-center mb-4">
          <button
            className="bg-blue-300 px-2 py-2 rounded transition hover:bg-blue-500 hover:underline shadow"
            onClick={this.handlePrevClick}
            disabled={this.state.page<=1}
          >
            &larr; Previous
          </button>
          <button
            className="bg-blue-300 px-2 py-2 rounded transition hover:bg-blue-500 hover:underline shadow"
            onClick={this.handleNextClick}
            disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)}
          >
            Next &rarr;
          </button>
        </div>
      </>
    );
  }
}
