import React from 'react'
import Head from 'next/head'
import Router from 'next/router'

// components
import Nav from 'components/nav'
import Footer from 'components/footer'
import Banner from 'containers/portfolio/banner'
import Tabs from 'containers/portfolio/tabs'
import Cards from 'containers/portfolio/cards'
import Modal from 'containers/portfolio/modal'

const OG_IMGAE = "/static/images/OG_IMGAE.png"

class Portfolio extends React.Component {
  state = {
    tab: 0,
    id: 0,
    is_open: false
  }
  setTab = (val) => {
    this.setState({tab: val})
  }
  toggleModal = async (data, is_open) => {
    if(data && data.type === 'IT Consulting'){
      Router.push(`/portfolio/${data.id}`)
    }
    else {
      await this.setState({
        id: data && data.id ? data.id : this.state.id,
        is_open : is_open
      })
    }
  }
  render() {
    const { tab, id, is_open } = this.state
    return ( 
      <div>
        <Head>
          <title>Tirrilee :: 포트폴리오</title>
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
        <Modal id={id} is_open={is_open} toggleModal={this.toggleModal}/>
        <Tabs tab={tab} setTab={this.setTab}/>
        <Cards tab={tab} toggleModal={this.toggleModal}/>
        <Footer/>
      </div>
    )
  }
}

export default Portfolio
