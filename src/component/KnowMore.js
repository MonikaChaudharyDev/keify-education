import React from 'react';
import Logo from '../assets/img/logo.png';

function KnowMore() {
  return (
    <section 
    className="bg-cover" 
      // style="background:#f7f8f9 url(assets/img/call-bg.png)no-repeat;"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 text-center align-items-center">
            <div className="callToImg  mt-4 mb-4 ">
              <img src={Logo} alt="Logo" className="logoCallto"/>
            </div>
          </div>
          <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12">
            <div className="call_action mt-4 mb-4 text-center">
              <h2 className="mb-4">Get Access to Quality Education at Most affordable Pricing</h2>
              <p className="mb-4">The Argument in India, when it comes to Quality education starts with affordable education and reaching out to the masses to ensure that youth can be empowered. This will only come when quality education is accessible to the youth. Considering this problem, few education enthusiasts came up with an idea of eKoching (an Online coaching Platform) to enable Educators and learners to come together and achieve this common goal.</p>
              <a href="#" className="btn text-white theme-bg btn-md rounded">Know more about us</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default KnowMore
