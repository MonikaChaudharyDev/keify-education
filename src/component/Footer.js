import React from 'react';
import GooglePlay from '../assets/img/icon-googleplay.svg';
import AppStore from '../assets/img/icon-appstore.svg'

function Footer() {
  return (
    <footer className ="skin-light-footer style-2">
      <div className="footer-middle">
        <div className="container">
          <div className="row">            
            <div className="col-lg-4 col-md-4">
              <div className="footer_widget">
                <h4 className="extream mb-3">Get the App</h4>
                <p>Download our mobile app to enjoy internet free streaming of videos lectures and for a seamless user experience</p>
                <div className="foot-news-last">
                  <a href="#" target="_blank">
                    <img src={GooglePlay} alt="icon-googleplay" />
                  </a>
                  <a href="#" target="_blank">
                    <img src={AppStore} alt="icon-appstore" />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="col-lg-8 col-md-8 ml-auto">
              <div className="row">
                <div className="col-lg-4 col-md-4">
                  <div className="footer_widget">
                    <h4 className="widget_title">Exams</h4>
                    <ul className="footer-menu">
                      <li><a href="#">MBA</a></li>
                      <li><a href="#">GATE</a></li>
                      <li><a href="#">CUCET</a></li>
                      <li><a href="#">MBA/BBA after 12th</a></li>                        
                    </ul>
                  </div>
                </div>
                    
                <div className="col-lg-4 col-md-4">
                  <div className="footer_widget">
                    <h4 className="widget_title">About Us</h4>
                    <ul className="footer-menu">
                      <li><a href="#">About Keify</a></li>                      
                      <li><a href="#">Refund &amp; Cancellation</a></li>
                      <li><a href="#">Terms and Conditions</a></li>
                      <li><a href="#">Privacy Policy</a></li>
                      <li><a href="#">Contact Us</a></li>            
                    </ul>
                  </div>
                </div>
            
                <div className="col-lg-4 col-md-4">
                  <div className="footer_widget">
                    <h4 className="widget_title">Helpline</h4>
                    <p className="mb-3 font-16">
                      <i className="fas fa-phone-alt"></i> +91 1234567890
                    </p>
                    <p className="mb-1">
                      Time : 9:00 AM – 9:00 PM | Monday to Saturday
                    </p>
                    <p className="mb-3 font-14">
                      <i className="fa fa-envelope"></i> 
                      <a className="mb-3 font-12" href="mailto:support@keify.com">
                        support@keify.com
                      </a>
                    </p>
              
                    <div className="d-flex">
                      <a href="#" target="_blank" className="facebook socila-icon-box">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a href="#" target="_blank" className="twitter socila-icon-box">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a href="#" target="_blank" className="instagram socila-icon-box">
                        <i className="fab fa-instagram"></i>
                      </a>
                      <a href="#" target="_blank" className="youtube socila-icon-box">
                        <i className="fab fa-youtube"></i>
                      </a>
                      <a href="#" target="_blank" className="telegram socila-icon-box">
                        <i className="fab fa-telegram"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom br_light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12 col-md-12 text-center">
              <p className="mb-0">© 2021 Keify.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
