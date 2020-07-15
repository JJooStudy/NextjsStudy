import React from 'react'
import Head from 'next/head'
import Writing01 from 'containers/writing/Writing01';

// components
// import Nav from 'components/nav'
// import Footer from 'components/footer'
// import Banner from 'containers/home/banner'
// import Info from 'containers/home/info'
// import Mission from 'containers/home/mission'
// import Identity from 'containers/home/identity'
// import Value from 'containers/home/value'
// import Contact from 'containers/home/contact'

// images
const OG_IMGAE = "/static/images/OG_IMGAE.png"

class Home extends React.Component {
  render() {
    return ( 
      <div>
        <Head>
          <title>리액트 탐험기 - 분양글</title>
          {/* SEO */}
          <meta property="og:url" content="/"/>
          <meta property="og:image" content={OG_IMGAE}/>
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Tirrilee" />
          <meta property="og:description" content="23" />
          <meta name="description" content="123" />
          <link rel="canonical" href="/" />
        </Head>
        <h2>분양 글등록</h2>
        <Writing01 />
        {/* <Nav fixed/>
        <Banner/>
        <Info/>
        <Mission/>
        <Value/>
        <Identity/>
        <Contact/>
        <Footer/> */}
      </div>
    )
  }
}

export default Home
