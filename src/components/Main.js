import React from 'react'
import PropTypes from 'prop-types'

import Me from '../images/me.jpg';
import Graph from '../images/graph.png';
import Blog from '../images/gatsby-content.png';
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="intro" className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">A Little About</h2>
          <h3>Hey there! My name is Tyler Langties.</h3>
          <span className="image main"><img src={Me} alt="" /></span>
          <p>I'm a web developer specializing in Javascript UX and performance first products. I love keeping up to date with the latest technologies and putting them to the test in my <a href="page-2">personal projects</a>. I also practice staying close to my community by contributing to open source repos.</p>
          {close}
        </article>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Work</h2>
          <h3><strong>Gatsby Blog with Contentful CMS.</strong></h3>
          <span className="image main"><img src={Blog} alt="" /></span>
          <p>A fully functional blog template, made with Contentful CMS, Gatsby.js & GraphQL. Web hooks trigger a rebuild everytime the site is updated via CMS or git.</p> <p className="links"><a href="https://loving-liskov-0d4d83.netlify.com/" target="_blank">Demo</a> | <a href="https://github.com/tylerlangties/contentful-blog" target="_blank">Code</a><br/><br/></p>

          <h3><strong>Crypto Index Graph</strong></h3>
          <span className="image main"><img src={Graph} alt="" /></span>
          <p>lorem upsum.....</p> <p className="links"><a href="https://dreamy-heyrovsky-fa9d75.netlify.com/" target="_blank">Demo</a> | <a href="https://github.com/tylerlangties/crypto-index" target="_blank">Code</a><br/><br/></p>
          <p><a href="page-2">More Work</a></p>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>
          <form action="mailto:tylerlangties@gmail.com" method="post" encType="text/plain">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li><input type="submit" value="Send Message" className="special" /></li>
              <li><input type="reset" value="Reset" /></li>
            </ul>
          </form>
          <ul className="icons">
            <li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
            <li><a href="#" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
            <li><a href="#" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
            <li><a href="#" className="icon fa-github"><span className="label">GitHub</span></a></li>
          </ul>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main