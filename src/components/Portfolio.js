import React from 'react'
import daisy from '../images/daisy.jpg'
import home from '../images/home_blk_wht.jpg'
import sunset from '../images/sunset.jpg'
import bird from '../images/bird.jpg'
import pickup from '../images/white_pickup.jpg'
import butterfly from '../images/butterflies.jpg'
// Fontawwesome Imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons'
// React popup box
import { PopupboxManager, PopupboxContainer } from 'react-popupbox'
import 'react-popupbox/dist/react-popupbox.css'
import { text } from '@fortawesome/fontawesome-svg-core'

const Portfolio = () => {
  // daisy
  const openPopupboxDaisy = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={daisy}
          alt="A flower ..."
        />
        <p>Pariatur aliquip duis esse consectetu.</p>
        <b>Audubon Society:</b>
        <a
          className="hyper-link"
          onClick={() => window.open('https://www.audubon.org/')}
        >
          https://www.audubon.org/
        </a>
      </>
    )
    PopupboxManager.open({ content })
  }

  const popupboxConfigDaisy = {
    titlebar: {
      enable: true,
      text: 'A Daisy',
    },
    fadeIn: true,
    fadeInSpeed: 500,
  }

  // home
  const openPopupboxHome = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={home}
          alt="A home on the bayou ..."
        />
        <p>
          Pariatur aliquip duis esse consectetur pariatur eu esse enim. Mollit
          nisi ex irure ex sunt laboris proident.
        </p>
        <b>Landscape Photographers:</b>
        <a
          className="hyper-link"
          onClick={() =>
            window.open(
              'https://petapixel.com/2019/12/24/15-inspiring-landscape-photographers/'
            )
          }
        >
          https://petapixel.com/2019/12/24/15-inspiring-landscape-photographers/
        </a>
      </>
    )
    PopupboxManager.open({ content })
  }

  const popupboxConfigHome = {
    titlebar: {
      enable: true,
      text: 'A home on the Bayou...',
    },
    fadeIn: true,
    fadeInSpeed: 500,
  }

  // sunset
  const openPopupboxSunset = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={sunset}
          alt="A flower ..."
        />
        <p>Pariatur aliquip duis esse consectetur</p>
        <b>Sunset:</b>
        <a
          className="hyper-link"
          onClick={() => window.open('https://www.timeanddate.com/sun/')}
        >
          https://www.timeanddate.com/sun/
        </a>
      </>
    )
    PopupboxManager.open({ content })
  }

  const popupboxConfigSunset = {
    titlebar: {
      enable: true,
      text: 'A Daisy',
    },
    fadeIn: true,
    fadeInSpeed: 500,
  }

  // bird
  const openPopupboxBird = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={bird}
          alt="An Ibis ..."
        />
        <p>
          Pariatur aliquip duis esse consectetur pariatur eu esse enim. Mollit
          nisi ex irure ex sunt laboris.
        </p>
        <b>Sunset:</b>
        <a
          className="hyper-link"
          onClick={() => window.open('https://www.audubon.org/')}
        >
          https://www.audubon.org/
        </a>
      </>
    )
    PopupboxManager.open({ content })
  }

  const popupboxConfigBird = {
    titlebar: {
      enable: true,
      text: 'A Daisy',
    },
    fadeIn: true,
    fadeInSpeed: 500,
  }

  // sunset
  const openPopupboxButterfly = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={butterfly}
          alt="Two butterflies ..."
        />
        <p>
          Pariatur aliquip duis esse consectetur pariatur eu esse enim. Mollit
          nisi ex irure ex sunt laboris proident.
        </p>
        <b>Sunset:</b>
        <a
          className="hyper-link"
          onClick={() => window.open('https://www.audubon.org/')}
        >
          https://www.audubon.org/
        </a>
      </>
    )
    PopupboxManager.open({ content })
  }

  const popupboxConfigButterfly = {
    titlebar: {
      enable: true,
      text: 'A Daisy',
    },
    fadeIn: true,
    fadeInSpeed: 500,
  }
  // sunset
  const openPopupboxPickup = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={pickup}
          alt="A flower ..."
        />
        <p>
          Pariatur aliquip duis esse consectetur pariatur eu esse enim. Mollit
          nisi ex irure ex sunt laboris proident a.
        </p>
        <b>Sunset:</b>
        <a
          className="hyper-link"
          onClick={() => window.open('https://classiccars.com/classic-trucks')}
        >
          https://classiccars.com/classic-trucks
        </a>
      </>
    )
    PopupboxManager.open({ content })
  }

  const popupboxConfigPickup = {
    titlebar: {
      enable: true,
      text: 'A Daisy',
    },
    fadeIn: true,
    fadeInSpeed: 500,
  }

  return (
    <div className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5>portfolio">Portfolio</h1>
        <div className="image-box-wrapper row justify-content-center">
          <div className="portfolio-image-box" onClick={openPopupboxDaisy}>
            <img
              className="portfolio-image"
              src={daisy}
              alt="A hot pink daisy..."
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/*  */}

          <div className="portfolio-image-box" onClick={openPopupboxHome}>
            <img
              className="portfolio-image"
              src={home}
              alt="A home on the shore..."
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/*  */}

          <div className="portfolio-image-box" onClick={openPopupboxSunset}>
            <img
              className="portfolio-image"
              src={sunset}
              alt="A Sunset to remember..."
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/*  */}

          <div className="portfolio-image-box" onClick={openPopupboxBird}>
            <img className="portfolio-image" src={bird} alt="An blue Ibis..." />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/*  */}

          <div className="portfolio-image-box" onClick={openPopupboxButterfly}>
            <img
              className="portfolio-image"
              src={butterfly}
              alt="Two butterflies ..."
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/*  */}

          <div className="portfolio-image-box" onClick={openPopupboxPickup}>
            <img
              className="portfolio-image"
              src={pickup}
              alt="A white pickup..."
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
        </div>
      </div>
      <PopupboxContainer {...popupboxConfigDaisy} />
      <PopupboxContainer {...popupboxConfigHome} />
      <PopupboxContainer {...popupboxConfigSunset} />
      <PopupboxContainer {...popupboxConfigBird} />
      <PopupboxContainer {...popupboxConfigButterfly} />
      <PopupboxContainer {...popupboxConfigPickup} />
    </div>
  )
}

export default Portfolio
