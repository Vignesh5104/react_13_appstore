import {Component} from 'react'
import AppItem from '../AppItem'
import TabItem from '../TabItem'
import './index.css'

const tabsList = [
  {tabId: 'SOCIAL', displayText: 'Social'},
  {tabId: 'GAMES', displayText: 'Games'},
  {tabId: 'NEWS', displayText: 'News'},
  {tabId: 'FOOD', displayText: 'Food'},
]

const appsList = [
  {
    appId: 0,
    appName: 'Facebook',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/social-facebook.png',
    category: 'SOCIAL',
    appLink:
      'https://play.google.com/store/apps/details?id=com.facebook.katana',
  },
  {
    appId: 1,
    appName: 'Messenger',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/social-messenger.png',
    category: 'SOCIAL',
    appLink: 'https://play.google.com/store/apps/details?id=com.facebook.orca',
  },
  {
    appId: 2,
    appName: 'WhatsApp',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/social-whatsapp.png',
    category: 'SOCIAL',
    appLink: 'https://play.google.com/store/apps/details?id=com.whatsapp',
  },
  {
    appId: 3,
    appName: 'Instagram',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/social-instagram.png',
    category: 'SOCIAL',
    appLink:
      'https://play.google.com/store/apps/details?id=com.instagram.android',
  },
  {
    appId: 4,
    appName: 'Snapchat',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/social-snapchat.png',
    category: 'SOCIAL',
    appLink:
      'https://play.google.com/store/apps/details?id=com.snapchat.android',
  },
  {
    appId: 5,
    appName: 'Twitter',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/social-twitter.png',
    category: 'SOCIAL',
    appLink:
      'https://play.google.com/store/apps/details?id=com.twitter.android',
  },
  {
    appId: 6,
    appName: 'Pinterest',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/social-pinterest.png',
    category: 'SOCIAL',
    appLink: 'https://play.google.com/store/apps/details?id=com.pinterest',
  },
  {
    appId: 7,
    appName: 'WeChat',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/social-wechat.png',
    category: 'SOCIAL',
    appLink: 'https://play.google.com/store/apps/details?id=com.michatapp.im',
  },
  {
    appId: 8,
    appName: 'LinkedIn',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/social-linkedin.png',
    category: 'SOCIAL',
    appLink:
      'https://play.google.com/store/apps/details?id=com.linkedin.android',
  },
  {
    appId: 9,
    appName: 'Telegram',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/social-telegram.png',
    category: 'SOCIAL',
    appLink:
      'https://play.google.com/store/apps/details?id=org.telegram.messenger',
  },
  {
    appId: 10,
    appName: 'Subway Surfers',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/games-subway-surfers.png',
    category: 'GAMES',
    appLink:
      'https://play.google.com/store/apps/details?id=com.kiloo.subwaysurf',
  },
  {
    appId: 11,
    appName: 'Crossy Road',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/games-crossy-road.png',
    category: 'GAMES',
    appLink:
      'https://play.google.com/store/apps/details?id=com.yodo1.crossyroad',
  },
  {
    appId: 12,
    appName: 'Super Chef',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/games-super-chef.png',
    category: 'GAMES',
    appLink:
      'https://play.google.com/store/apps/details?id=com.ministone.game.risingsuperchef2',
  },
  {
    appId: 13,
    appName: 'Angry Birds',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/games-angry-birds.png',
    category: 'GAMES',
    appLink: 'https://play.google.com/store/apps/details?id=com.rovio.baba',
  },
  {
    appId: 14,
    appName: 'Hill Climb 2',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/games-hill-climb-2.png',
    category: 'GAMES',
    appLink:
      'https://play.google.com/store/apps/details?id=com.fingersoft.hcr2',
  },
  {
    appId: 15,
    appName: 'Temple Run',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/games-temple-run.png',
    category: 'GAMES',
    appLink:
      'https://play.google.com/store/apps/details?id=com.imangi.templerun',
  },
  {
    appId: 16,
    appName: 'Dr. Driving',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/games-dr-driving.png',
    category: 'GAMES',
    appLink:
      'https://play.google.com/store/apps/details?id=com.ansangha.drdriving',
  },
  {
    appId: 17,
    appName: 'Smurfs Bubble',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/games-smurfs-bubble.png',
    category: 'GAMES',
    appLink:
      'https://play.google.com/store/apps/details?id=com.sonypicturestelevision.smurfslostvillage',
  },
  {
    appId: 18,
    appName: 'Grade Learning',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/games-grade-learning.png',
    category: 'GAMES',
    appLink:
      'https://play.google.com/store/apps/details?id=com.kevinbradford.games.firstgrade',
  },
  {
    appId: 19,
    appName: 'My Talking Tom',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/games-my-talking-tom.png',
    category: 'GAMES',
    appLink:
      'https://play.google.com/store/apps/details?id=com.outfit7.mytalkingtomfree',
  },
  {
    appId: 20,
    appName: 'Inshorts',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/news-inshorts.png',
    category: 'NEWS',
    appLink: 'https://play.google.com/store/apps/details?id=com.nis.app',
  },
  {
    appId: 21,
    appName: 'Way2News',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/news-way2news.png',
    category: 'NEWS',
    appLink:
      'https://play.google.com/store/apps/details?id=sun.way2sms.hyd.com',
  },
  {
    appId: 22,
    appName: 'Google News',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/news-google-news.png',
    category: 'NEWS',
    appLink:
      'https://play.google.com/store/apps/details?id=com.google.android.apps.magazines',
  },
  {
    appId: 23,
    appName: 'Flipboard',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/news-flipboard.png',
    category: 'NEWS',
    appLink: 'https://play.google.com/store/apps/details?id=flipboard.app',
  },
  {
    appId: 24,
    appName: 'SmartNews',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/news-smart-news.png',
    category: 'NEWS',
    appLink:
      'https://play.google.com/store/apps/details?id=jp.gocro.smartnews.android',
  },
  {
    appId: 25,
    appName: 'BBC News',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/news-bbc-news.png',
    category: 'NEWS',
    appLink: 'https://play.google.com/store/apps/details?id=bbc.mobile.news.ww',
  },
  {
    appId: 26,
    appName: 'CNN News',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/news-cnn-news.png',
    category: 'NEWS',
    appLink:
      'https://play.google.com/store/apps/details?id=com.cnn.mobile.android.phone',
  },
  {
    appId: 27,
    appName: 'Daily Wire',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/news-daily-wire.png',
    category: 'NEWS',
    appLink:
      'https://play.google.com/store/apps/details?id=com.dailywire.thedailywire',
  },
  {
    appId: 28,
    appName: 'AP News',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/news-ap-news.png',
    category: 'NEWS',
    appLink: 'https://play.google.com/store/apps/details?id=mnn.Android',
  },
  {
    appId: 29,
    appName: 'News Break',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/news-news-break.png',
    category: 'NEWS',
    appLink:
      'https://play.google.com/store/apps/details?id=appnewsbreakgr.wpapp',
  },
  {
    appId: 30,
    appName: 'Zomato',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/food-zomato.png',
    category: 'FOOD',
    appLink:
      'https://play.google.com/store/apps/details?id=com.application.zomato',
  },
  {
    appId: 31,
    appName: 'Swiggy',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/food-swiggy.png',
    category: 'FOOD',
    appLink: 'https://play.google.com/store/apps/details?id=in.swiggy.android',
  },
  {
    appId: 32,
    appName: "Domino's Pizza",
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/food-dominos.png',
    category: 'FOOD',
    appLink: 'https://play.google.com/store/apps/details?id=com.Dominos',
  },
  {
    appId: 33,
    appName: 'All in One',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/food-all-in-one.png',
    category: 'FOOD',
    appLink:
      'https://play.google.com/store/apps/details?id=com.allinone.food.delivery.offers.deals',
  },
  {
    appId: 34,
    appName: 'Instacart',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/food-insta-cart.png',
    category: 'FOOD',
    appLink:
      'https://play.google.com/store/apps/details?id=com.stedor.instashop',
  },
  {
    appId: 35,
    appName: 'Saucey',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/food-saucey.png',
    category: 'FOOD',
    appLink:
      'https://play.google.com/store/apps/details?id=com.blink.doctorsaucy',
  },
  {
    appId: 36,
    appName: 'Waitr',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/food-waitr.png',
    category: 'FOOD',
    appLink: 'https://www.waiter.com/app',
  },
  {
    appId: 37,
    appName: 'Grubhub',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/food-grubhub.png',
    category: 'FOOD',
    appLink:
      'https://play.google.com/store/apps/details?id=com.grubhub.android',
  },
  {
    appId: 38,
    appName: 'Mercato',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/food-mercato.png',
    category: 'FOOD',
    appLink: 'https://www.mercato.com/',
  },
  {
    appId: 39,
    appName: 'DOT',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/app-store/food-dot.png',
    category: 'FOOD',
    appLink:
      'https://play.google.com/store/apps/details?id=com.startwithdotus.dot',
  },
]

// Write your code here

class AppStore extends Component {
  state = {activeTabId: tabsList[0].tabId, searchValue: ''}

  changeTab = selTabId => {
    this.setState({activeTabId: selTabId})
  }

  changeSearchValue = event => {
    this.setState({searchValue: event.target.value})
  }

  getFilteredList = searchedApps => {
    const {activeTabId} = this.state
    const filteredList = searchedApps.filter(
      each => each.category === activeTabId,
    )

    return filteredList
  }

  getSearchResults = () => {
    const {searchValue} = this.state

    const searchedApps = appsList.filter(each =>
      each.appName.toLowerCase().includes(searchValue.toLocaleLowerCase()),
    )
    return searchedApps
  }

  render() {
    const {activeTabId, searchValue} = this.state
    const searchResults = this.getSearchResults()
    const filteredList = this.getFilteredList(searchResults)

    return (
      <div className="bgcon">
        <h1>App Store</h1>
        <div className="inp-con">
          <input
            onChange={this.changeSearchValue}
            value={searchValue}
            type="search"
            placeholder="Search"
          />
          <img
            className="search-icon"
            src="https://assets.ccbp.in/frontend/react-js/app-store/app-store-search-img.png"
            alt="search icon"
          />
        </div>
        <ul className="tab-lists">
          {tabsList.map(each => (
            <TabItem
              tabDetails={each}
              changeTab={this.changeTab}
              isActive={each.tabId === activeTabId}
              key={each.tabId}
            />
          ))}
        </ul>
        <ul className="apps-con">
          {filteredList.map(each => (
            <AppItem appDetails={each} key={each.appId} />
          ))}
        </ul>
      </div>
    )
  }
}

export default AppStore
