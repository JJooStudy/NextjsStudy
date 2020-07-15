import React from 'react'
import Head from 'next/head'
import { withRouter } from 'next/router'

// components
import Nav from 'components/nav'
import Footer from 'components/footer'
import Title from 'containers/portfolio_detail/title'
import Content from 'containers/portfolio_detail/content'

import { data } from 'data/portfolio'

// images

class Home extends React.Component {
  state = {
    data : null
  }
  componentDidMount() {
    const { id } = this.props.router.query
    const item = data.filter(d => d.id === parseInt(id))
    this.setState({
      data: item[0]
    })
  }
  render() {
    const { id } = this.props.router.query
    const item = data.filter(d => d.id === parseInt(id))
    return ( 
      <div>
        {item && item.length > 0 && (
          <Head>
            <title>Tirrilee :: {item[0].title}</title>
            <meta property="og:url" content={`https://www.tirrilee.io/portfolio/${item[0].id}`}/>
            <meta property="og:image" content={item[0].image}/>
            <meta property="og:type" content="website" />
            <meta property="og:title" content={`Tirrilee : ${item[0].name}`} />
            <meta property="og:description" content={item[0].title} />
            <meta name="description" content={item[0].title} />
            <link rel="canonical" href={`https://www.tirrilee.io/portfolio/${item[0].id}`} />
          </Head>
        )}
        <Nav/>
        {
          this.state.data && (
            <>
            <Title data={this.state.data}/>
            <Content data={this.state.data}/>
            </>
          )
        }        
        <Footer/>
      </div>
    )
  }
}

export default withRouter(Home)
