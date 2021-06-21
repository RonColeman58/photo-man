import React from 'react'
import Typed from 'react-typed'

const Header = () => {
  return (
    <div id="home" className="header-wrapper">
      <div className="main-info">
        <h1>portraits . lifestyles . wild life</h1>
        <Typed
          className="typed-text"
          strings={[
            'weddings',
            'parties',
            'conventiions',
            'sporting events',
            'reunions',
            'realestate',
          ]}
          typeSpeed={80}
          backSpeed={70}
          loop
        />
        <a href="#" className="btn-main-offer">
          contact me
        </a>
      </div>
    </div>
  )
}

export default Header
