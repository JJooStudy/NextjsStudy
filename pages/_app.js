import React from 'react'
import App from 'next/app'
import { createGlobalStyle } from 'styled-components'

import ScrollToTop from 'components/ScrollToTop'

import ReactGA from 'react-ga'

ReactGA.initialize('UA-155067425-01')
// stores

// _app.js에 App을 오버라이딩하여 custom, Mobx store와 global css 설정
const GlobalStyle = createGlobalStyle`
  /*reset css*/
  * {margin:0; padding:0;}
  html, body {
    width:100%; 
    height:100%;
  }
  li { 
    list-style-type:none;
  }
  img { 
    border:none; 
  }
  html, body, div, span, object, iframe, 
  h1, h2, h3, h4, h5, h6, p, blockquote, 
  pre, a, abbr, address, big, cite, code, 
  del, dfn, em, font, img, ins, q, s, samp, 
  small, strike, strong, sub, sup, tt, var, 
  b, u, i, dl, dt, dd, ol, ul, li, fieldset, 
  form, label, legend, textarea, input, select, 
  table, caption, tbody, tfoot, thead, tr, th, td {
    margin:0; 
    padding:0; 
    font-size:14px; 
    // font-family:'Roboto', 'NotoKr', sans-serif;
    font-weight:300;
    // line-height:1;
    text-decoration: none;
  }
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display:block;
  }
  table {
    width:100%; 
    border-collapse:collapse; 
    border-spacing:0; 
    border:0;
  }
  ol, ul {
    list-style:none;
  }
  img, fieldset, input {
    border:none; 
    vertical-align:middle;
  }
  hr, caption {
    display:none;
  }
  legend, caption {
    width:0; 
    height:0; 
    line-height:0; 
    position:absolute; 
    top:-9999px; 
    left:-9999px; 
    overflow:hidden; 
    visibility:hidden;
  }
  object {
    outline:none;
  }
  button, input, select, textarea {
    padding:0; 
    margin:0; 
    border-radius:0; 
    // color:#fff; 
    vertical-align:middle; 
    font-size:100%; 
    background:transparent;
  }
  input[type="text"], button, 
  html input[type="button"] {
    border:0 none; 
    vertical-align:middle;
  }
  input[type="reset"], button, input[type="submit"] {
    outline:none; 
    cursor:pointer;
  }
  button[disabled], html input[disabled] {
    cursor:default;
  }
  input[type="checkbox"], input[type="radio"] {
    box-sizing:border-box; 
    padding:0;
  }
  textarea {
    border:0 none; 
    overflow:auto; 
    vertical-align:top; 
    overflow-x:hidden; 
    overflow-y:auto; 
    resize:none;
  }
  table.ui-datepicker-calendar { 
    display:none; 
  }

  body {
    margin: 0;
    font-family: "Noto Sans KR", 'Noto Sans', sans-serif !important;
  }
  p {
    margin: 0;
  }
  hr {
    border: 0px;
  }
  .slick-track{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .slick-dots li button:before {
    content: '•' !important;
  }
`

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    // Provider는 전역에서 상태 변화를 감시. Provider로 store 적용. props로 넣어줌
    const { Component, pageProps } = this.props;
    return (
        <>
          <GlobalStyle />
          <ScrollToTop>
            <Component {...pageProps} />
          </ScrollToTop>
        </>
    );
  }
}

export default MyApp;
