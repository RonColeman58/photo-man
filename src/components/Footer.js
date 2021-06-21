import React from 'react'
import{
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon, 
    RedditShareButton,
    RedditIcon,
    LinkedinShareButton,
    LinkedinIcon
} from "react-share"

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
                                <br/>
                                <a className="footer-nav">About Me</a>
                                <br/>
                                <a className="footer-nav">Services</a>
                            </div>
                            <div className="col">
                                <a className="footer-nav">Experience</a>
                                <br/>
                                <a className="footer-nav">Portfolio</a>
                                <br/>
                                <a className="footer-nav">Contacts</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 co;-md-5 col-sm-6 align-items-center">
                        <div className="d-flex justify-content-center">
                        
                            <FacebookShareButton
                                url={`https://www.facebook.com`}
                                quote={`Professioal Photograpjic Services`}
                                hashtag="#facebook"
                                >
                                <FacebookIcon className="mx-3" size={36} />
                            </FacebookShareButton>

                            <TwitterShareButton
                                url={`https://www.twitter.com`}
                                quote={`Professioal Photograpjic Services`}
                                hashtag="#facebook"
                                >
                                <TwitterIcon className="mx-3" size={36} />
                            </TwitterShareButton>

                            <RedditShareButton
                                url={`https://www.reddit.com`}
                                quote={`Professioal Photograpjic Services`}
                                hashtag="#facebook"
                                >
                                <RedditIcon className="mx-3" size={36} />
                            </RedditShareButton>

                            <LinkedinShareButton
                                url={`https://www.linkedin.com`}
                                quote={`Professioal Photograpjic Services`}
                                hashtag="#facebook"
                                >
                                <LinkedinIcon className="mx-3" size={36} />
                            </LinkedinShareButton>
                        </div>
                    <p className="pt-3 text-center">
                        Copyright&copy;
                        {new Date().getFullYear()}&nbsp;Cassagnol Photography | All Rights
                        Reserved
                    </p> 
                </div>
            </div>
        </div>
    </div>
    )
}

export default Footer
