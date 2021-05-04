import React from 'react'
import author from './avatar-4.png'

const AboutMe = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5">
            <img className="profile-img" src={author} alt="Author..." />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-heading">About Me</h1>
          <a>
            Fugiat proident quis ex ad pariatur do eiusmod voluptate quis
            proident aliquip exercitation sit. Lorem amet exercitation ad dolore
            proident ad fugiat sunt aliquip do ea. Nostrud enim culpa ea velit.
            Fugiat proident quis ex ad pariatur do eiusmod voluptate quis
            proident aliquip exercitation sit. Lorem amet exercitation ad dolore
            proident ad fugiat sunt aliquip do ea. Nostrud enim culpa ea velit.
            Fugiat proident quis ex ad pariatur do eiusmod voluptate quis
            proident aliquip exercitation sit. Lorem amet exercitation ad dolore
            proident ad fugiat sunt aliquip do ea. Nostrud enim culpa ea velit.
          </a>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
