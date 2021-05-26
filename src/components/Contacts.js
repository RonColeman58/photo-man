import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import { useForm } from 'react-hook-form'

const Contacts = () => {
  const [successMessage, setSucessMessage] = useState('')
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const serviceID = 'service_ID'
  const templateID = 'template_ID'
  const userID = 'user_FaX4yqQXiWfj8ZfmVxho1'

  const onSubmit = (data, r) => {
    sendEmail(
      serviceID,
      templateID,
      {
        name: data.name,
        phone: data.phone,
        email: data.email,
        subject: data.subject,
        description: data.description,
      },
      userID
    )
    r.target.reset()
  }

  const sendEmail = (serviceID, templateID, variables, userID) => {
    emailjs
      .send(serviceID, templateID, variables, userID)
      .then(() => {
        setSucessMessage(
          "Your form has been sent! I'll contact you as soon as posible."
        )
      })
      .catch((err) => console.error(`somethings gone wrong ${err}`))
  }

  return (
    <div id="contacts" className="contacts">
      <div className="text-center">
        <h1>contact me</h1>
        <p>
          Please fill out the form. Tell me about the event you would like me to
          capture.
        </p>
        <span className="success-message">{successMessage}</span>
      </div>

      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-md-6 col-xs-12">
              {/* Name Input */}
              <div className="text-center">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  name="name"
                  aria-invalid={errors.name ? 'true' : 'false'}
                  {...register('name', {
                    required: 'Please enter your name',
                    maxLength: {
                      value: 20,
                      message: 'Please enter a name fewer than 20 characters',
                    },
                  })}
                />
                <div className="line"></div>
              </div>
              <span className="error-message">
                {errors.name && errors.name.message}
              </span>
              {/* Phone Input */}
              <div className="text-center">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Phone Number"
                  name="phone"
                  aria-invalid={errors.phone ? 'true' : 'false'}
                  {...register('phone', {
                    required: 'Please enter a phone number',
                  })}
                />
                <div className="line"></div>
              </div>
              <spam className="error-message">
                {errors.phone && errors.phone.message}
              </spam>
              {/* Email Input */}
              <div className="text-center">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  name="email"
                  aria-invalid={errors.email ? 'true' : 'false'}
                  {...register('email', {
                    required: 'Please provide an email',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid Email',
                    },
                  })}
                />
                <div className="line"></div>
              </div>
              <span className="error-message">
                {errors.email && errors.email.message}
              </span>
              {/* Subject Input */}
              <div className="text-center">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Subject"
                  name="subject"
                  aria-invalid={errors.subject ? 'true' : 'false'}
                  {...register('subject', {
                    required: 'Oops, you forgot to include a subject',
                  })}
                />
                <div className="line"></div>
              </div>
              <span className="error-message">
                {errors.subject && errors.subject.message}
              </span>
            </div>
            <div className="col-md-6 col-xs-12">
              {/* Description */}
              <div className="text-center">
                <textarea
                  type="text"
                  className="form-control"
                  placeholder="Give me a short description of your needs"
                  name="drscription"
                  aria-invalid={errors.description ? 'true' : 'false'}
                  {...register('description', {
                    required: 'Please desrcibe your project',
                  })}
                ></textarea>
                <div className="line"></div>
                <span className="error-message">
                  {errors.description && errors.description.message}
                </span>
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
