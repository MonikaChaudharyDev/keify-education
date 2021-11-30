import React, { useState } from 'react';
import {testimonial} from '../data/testimonial';
import { Carousel } from 'react-bootstrap';
import StudentTestimonial from '../component/StudentTestimonial';
import slider1 from '../assets/img/slider1.jpg';
import slider2 from '../assets/img/slider2.jpg';
import NewSticker from '../assets/img/newSticker.png';
import Exam from '../component/Exam';

function Home() {
   const [data, setData] = useState(testimonial);
   const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  

  return (
    <div className="home">
    <div className="hero_banner image-cover image_bottom">
      <div className="container">
        <div className="row homepageSection">
          <div className="col-xl-9 col-lg-9 col-sm-9 col-xs-12 col-md-9 sliderBlk">
            <div className="home-slider space">
              {/* <!-- Single Item --> */}
              <div className="single_items lios_item">
                <div className="row align-items-center">
                  <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="side_block">
                      
                      <Carousel   activeIndex={index} onSelect={handleSelect} controls={false} autoPlay={true}>
                       <Carousel.Item interval={2000}>
                       <img src={slider1} className="img-fluid" alt="" />
                      </Carousel.Item>
                      <Carousel.Item interval={2000}>
                       <img src={slider2} className="img-fluid" alt="" />
                      </Carousel.Item>
                      <Carousel.Item interval={2000}>
                       <img src={slider1} className="img-fluid" alt="" />
                      </Carousel.Item>
                    </Carousel> 
                    {/* <img src={slider1} class="img-fluid" alt="" /> */}
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Single Item --> */}
              {/* <div class="single_items lios_item">
                <div class="row align-items-center">
                  <div class="col-lg-12 col-md-12 col-sm-12">
                    <div class="side_block">
                      <img src="assets/img/slider2.jpg" class="img-fluid" alt="" />
                    </div>
                  </div>
                </div>
              </div> */}
              {/* <!-- Single Item --> */}
              {/* <div class="single_items lios_item">
                <div class="row align-items-center">
                  <div class="col-lg-12 col-md-12 col-sm-12">
                    <div class="side_block">
                    <img src="assets/img/slider2.jpg" class="img-fluid" alt="" />
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-sm-3 col-xs-12 col-md-3 notificatBlk">
            <div className="notificationBlock">
              <h4 className="sectTtl txt-darkGrey text-center">Notification</h4>
              <ul className="notificationList">
                <li>
                  <a href="#" className="notifyItem">
                    Must Read - Public Notice <img src={NewSticker} alt="New" />
                  </a>
                </li>
                <li>
                  <a href="#" className="notifyItem">
                    Launching SSC - JE Live Online Course <img src={NewSticker} alt="New" />
                  </a>
                </li>
                <li>
                  <a href="#" className="notifyItem">
                    GATE 2022 Live Online Course <img src={NewSticker} alt="New" />
                  </a>
                </li>
                <li>
                  <a href="#" className="notifyItem">
                    Launching Chemical Engineering Course for GATE 2022 <img src={NewSticker} alt="New" />
                  </a>
                </li>
                <li>
                  <a href="#" className="notifyItem">
                    ESE 2020 Result
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- ============================ Homepage Banner End ================================== --> */}
    
    
    {/* <!-- ============================ Exam Section Start ================================== --> */}
    <section className="section-exam gray">
      <div className="container">
        <div className="d-flex heading justify-content-between align-items-center">
                <h2 className="">Exams</h2>
                <a href="#">Explore more <i className="fa fa-angle-right exploreMore" aria-hidden="true"></i></a>
            </div>
        <div className="row justify-content-center mt-30">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="crp_box fl_color ovr_tops">
              <div className="row align-items-center">
                
               <Exam  title='CAT' description='CAT is the Common Admission Test for admissions to
                    MBA programmes in 20 Indian Institutes of Management (IIMs) and top B-schools in India.'
                icon={<i className="fa fa-journal-whills"></i>}/>
                <Exam   title='GATE'  description='Graduate Aptitude Test in Engineering (GATE 2022) 
                      is one of an online national level entrance exam,and it is conducted
                      by the Indian Institute of Science...' icon={<i className="fa fa-business-time"></i>}/>
                <Exam title='University EXAMS'  description='What would I do after 12 th ? 
                     How would I get into the Under Graduate Management Programs? 
                     Which program would be better to choose?' icon={<i className="fa fa-user-shield"></i>}/> 
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    
    {/* <!-- ============================ Exam Section End ================================== --> */}
    
    
    {/* <!-- ============================ Student Testimonial Start ================================== --> */}
    <section className="section-exam">
      <div className="container">
        <div className="d-flex heading justify-content-between align-items-center">
                <h2 className="">Student Testimonials</h2>
            </div>
        <div className="testimonialsSet  mt-30">
          <div className="reviews-slide space">
            <StudentTestimonial data = {data} />
          </div>
        </div>
      </div>
    </section>
    {/* <!-- ============================ Student Testimonial End ================================== --> */}
      
    </div>
  )
}

export default Home
