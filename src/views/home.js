import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Munir Kamal</title>
        <meta name="description" content="My little bio page." />
        <meta property="og:title" content="Munir Kamal" />
        <meta property="og:description" content="My little bio page." />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/04b80e61-70cd-4697-a2ea-35b9b7d012a2/f51b8d00-ed56-4cf2-9aab-876d257c9659?org_if_sml=1"
        />
      </Helmet>
      <img
        alt="munir kamal"
        src="/playground_assets/munir-200h.jpg"
        className="home-image"
      />
      <h1 className="home-text">
        <span>Munir Kamal</span>
      </h1>
      <span className="home-text02">
        <span>
          I am a WordPress enthusiast who loves to create products and solve
          problems. I work primarily in the area of WordPress, creating new
          products and managing existing ones. Some of my latest creations are
          Editor Plus,
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <a
          href="https://editorskit.com/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <span className="home-text04">Editors Kit</span>
        </a>
        <span>
          ,
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <a
          href="https://wpblockslider.com/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <span className="home-text06">Block Slider</span>
        </a>
        <span>
          , and
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <a
          href="https://divisumo.com/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <span className="home-text08">Divisumo</span>
        </a>
        <span>
          . I am also a content creator at
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <a
          href="https://gutenberghub.com/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <span className="home-text10">Gutenberg Hub</span>
        </a>
        <span>.</span>
        <br></br>
        <span></span>
      </span>
      <a
        href="https://twitter.com/m_munirkamal"
        target="_blank"
        rel="noreferrer noopener"
        className="home-link4 button"
      >
        Follow me on Twitter
      </a>
      <button className="home-button button">Get Connected on FB</button>
      <a
        href="mailto:munir.kamal@gmail.com?subject=Contact Via Website"
        className="home-link5 button"
      >
        Email Me
      </a>
    </div>
  )
}

export default Home
