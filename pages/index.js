import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import Step1 from 'containers/Step1';
import Step2 from 'containers/Step2';
// import Nav from 'component/nav/Nav';
// import Writing01 from 'containers/writing/Writing01';


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
  state = {
    step : null
  }
  componentDidMount(){
    this.setState({
      step : 0
    })
  }
  handleNextStep = (step) => {
    this.setState({
      step : step
    })
    // console.log(step);
  }
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
        {/* <Step1 handleNextStep={this.handleNextStep} /> */}
        {
          this.state.step === 0 &&  ( <Step1 handleNextStep={this.handleNextStep} /> )
        }
        {
          this.state.step === 1 &&  ( <Step2 /> )
        }
        {/* {
          this.state.step == 'step1' ? null : null
        } */}
        {/* <Nav /> */}
        {/* <Writing01 /> */}
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
