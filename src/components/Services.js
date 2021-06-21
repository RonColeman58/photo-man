import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons'
import { faDesktop, faFileCode } from '@fortawesome/free-solid-svg-icons'

const Services = () => {
  return (
    <div id="services" className="services">
      <h1 className="py-5">my services</h1>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-3 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon
                  className="icon"
                  icon={faFacebookF}
                  size="2x"
                />
              </div>
              <h3>Photography</h3>
              <p>
                With over 25 years experience I'm commited to providing world
                class photographic quality and services.
              </p>
            </div>
          </div>
          {/*  */}
          <div className="col-lg-6 col-md-3 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faGoogle} size="2x" />
              </div>
              <h3>Portraits</h3>
              <p>
                Studio or life experience portraits, I'm mobile to meet you
                wherever you location of choice.
              </p>
            </div>
          </div>
          {/*  */}
          <div className="col-lg-6 col-md-3 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faDesktop} size="2x" />
              </div>
              <h3>WildLife</h3>
              <p>
                Sample my gallery for a peek at the beautiful world i've
                captured so far.
              </p>
            </div>
          </div>
          {/*  */}
          <div className="col-lg-6 col-md-3 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faFileCode} size="2x" />
              </div>
              <h3>Events</h3>
              <p>
                Little league to corporate conventions I'm availible to capture
                the important events of your life
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
