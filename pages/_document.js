import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { ServerStyleSheets } from '@material-ui/styles';

const OG_IMGAE = "/static/images/OG_IMGAE.png"

export default class MyDocument extends Document {
  // SSR styled components를 위해 _document.js에 셋팅
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const sheet2 = new ServerStyleSheets();
    const page = renderPage((App) => (props) =>
      sheet.collectStyles(<App {...props} />),
    );
    const page2 = renderPage((App) => (props) =>
      sheet2.collect(<App {...props} />),
    );
    const styleTags = sheet.getStyleElement();
    const styleTags2 = sheet2.getStyleElement();
    return {...page, ...page2, styleTags, styleTags2};
  }
  setGoogleTags() {
    return {
      __html: `
        Kakao.init('cfb8255258953f98baa084d45d41d03d');
        
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'UA-155067425-1');
      `
    };
  }
  render() {
    return (
      <html>
        <Head>    
          {this.props.styleTags}
          {this.props.styleTags2}
          <meta name="naver-site-verification" content="12005c1a60612f3a3510070ec18a2d7a1553fcab"/>
          {/* SEO */}
          {/* <meta property="og:url" content="https://www.tirrilee.io/"/>
          <meta property="og:image" content={OG_IMGAE}/>
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Tirrilee" />
          <meta property="og:description" content="티릴리는 가치를 지향하는 소프트웨어 개발회사 입니다. 기술을 필요한 사람들에게 제공하는 것, 티릴리가 추구하는 ‘가치지향’ 입니다." />
          <meta name="description" content="티릴리는 가치를 지향하는 소프트웨어 개발회사 입니다. 기술을 필요한 사람들에게 제공하는 것, 티릴리가 추구하는 ‘가치지향’ 입니다." />
          <link rel="canonical" href="https://www.tirrilee.io/" /> */}   
          <link rel="icon" type="image/x-icon" href="/static/images/favicon.png" />
          <link href="https://fonts.googleapis.com/css?family=Noto+Sans+KR:100,300,400,500,700,900|Noto+Sans:400,700&display=swap" rel="stylesheet" />
          <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
          <script src="//developers.kakao.com/sdk/js/kakao.min.js"/>
          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-155067425-1"/>
          <script dangerouslySetInnerHTML={this.setGoogleTags()} />
          <script data-ad-client="ca-pub-4968522808164989" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"/> 

        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
