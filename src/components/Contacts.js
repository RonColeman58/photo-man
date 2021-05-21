import React from 'react'
import emailjs from 'emailjs-com'

const Contacts = () => {
  const serviceID = 'serviceID'
  const templateID = 'templateID'
  const userID = 'user_FaX4yqQXiWfj8ZfmVxho1'

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm(serviceID, templateID, e.target, userID).then(
      (result) => {
        console.log(result.text)
      },
      (error) => {
        console.log(error.text)
      }
    )
  }

  return (
    <div className="contacts">
      <div className="text-center">
        <h1>contact me</h1>
        <p>
          Please fill out the form. Tell me about the event you would like me to
          capture.
        </p>
      </div>

      <div className="container">
        <form onSubmit={sendEmail}>
          <div className="row">
            <div className="col-md-6 col-xs-12">
              {/* Name Input */}
              <div className="text-center">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  name="name"
                />
                <div className="line"></div>
              </div>
              {/* Phone Input */}
              <div className="text-center">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Phone Number"
                  name="phone"
                />
                <div className="line"></div>
              </div>
              {/* Email Input */}
              <div className="text-center">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  name="email"
                />
                <div className="line"></div>
              </div>
              {/* Subject Input */}
              <div className="text-center">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Subject"
                  name="subject"
                />
                <div className="line"></div>
              </div>{' '}
            </div>
            <div className="col-md-6 col-xs-12">
              {/* Description */}
              <div className="text-center">
                <textarea
                  type="text"
                  className="form-control"
                  placeholder="Give me a short description"
                  name="email"
                ></textarea>
                <div className="line"></div>
              </div>
              <button className="btn-main-offer contact-btn" type="submit">
                Send Email
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contacts
