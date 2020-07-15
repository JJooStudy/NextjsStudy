import React from 'react'
import Head from 'next/head'

// components
import Nav from 'components/nav'
import Footer from 'components/footer'
import Banner from 'containers/news/banner'
import Tabs from 'containers/news/tabs'
import Cards from 'containers/news/cards'

const OG_IMGAE = "/static/images/OG_IMGAE.png"

class News extends React.Component {
  state = {
    tab: 0
  }
  setTab = (val) => {
    this.setState({tab: val})
  }
  render() {
    const { tab } = this.state
    return ( 
      <div>
        <Head>
          <title>Tirrilee :: 티릴리 소식</title>
          <meta property="og:url" content="https://www.tirrilee.io/"/>
          <meta property="og:image" content={OG_IMGAE}/>
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Tirrilee" />
          <meta property="og:description" content="티릴리는 가치를 지향하는 소프트웨어 개발회사 입니다. 기술을 필요한 사람들에게 제공하는 것, 티릴리가 추구하는 ‘가치지향’ 입니다." />
          <meta name="description" content="티릴리는 가치를 지향하는 소프트웨어 개발회사 입니다. 기술을 필요한 사람들에게 제공하는 것, 티릴리가 추구하는 ‘가치지향’ 입니다." />
          <link rel="canonical" href="https://www.tirrilee.io/" />
        </Head>
        <Nav fixed/>
        <Banner />
        <Tabs tab={tab} setTab={this.setTab}/>
        <Cards/>
        <Footer/>
      </div>
    )
  }
}

export default News
