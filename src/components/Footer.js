import React from 'react'

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="d-flex">
                            <p>City: Sunrise FL 33324</p>
                        </div>
                        <div className="d-flex">
                           <a href="tel: 954-555-555">954-555-5555</a>
                        </div>
                        <div className="d-flex">
                            <p>photo_man@gmail.com</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-2 col-sm-6">
                        <div className="row">
                            <div className="col">
                                <a className="footer-nav">Home</a>
                                <br/>>
                                <a className="footer-nav">About Me</a>
                                <br/>>
                                <a className="footer-nav">Services</a>
                            </div>
                            <div className="col">
                                <a className="footer-nav">Experience</a>
                                <br/>>
                                <a className="footer-nav">Portfolio</a>
                                <br/>>
                                <a className="footer-nav">Contacts</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
