import React from 'react';
import Carousel from 'react-elastic-carousel';
import userReview from "../assets/img/userReview1.png";
import Column from "../assets/img/column.svg";

function StudentTestimonial({ data }) {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },  
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 3 }   
  ];
  return (
    <div>
      {
        <Carousel breakPoints={breakPoints} >{
          data.map((person) => {
            const { id, name, occupation, rating, testimony } = person;
            return (
              <div key={id} className="single_items lios_item">
                <div className="_testimonial_wrios shadow_none border">
                  <div className="_testimonial_flex">
                    <div className="_testimonial_flex_first">
                      <div className="_tsl_flex_thumb">
                        <img src={userReview} className="img-fluid" alt="" />
                      </div>
                      <div className="_tsl_flex_capst">
                        <h5>{name}</h5>
                        <div className="_ovr_posts"><span>{occupation}</span></div>
                        <div className="_ovr_rates"><span><i className="fa fa-star"></i></span>{rating}</div>
                      </div>
                    </div>
                    <div className="_testimonial_flex_first_last">
                      <div className="_tsl_flex_thumb">
                        <img src={Column} className="img-fluid" alt="" />
                      </div>
                    </div>
                  </div>                  
                  <div className="facts-detail">
                    <p>{testimony}</p>
                  </div>
                </div>
              </div>
            )
          })
        }      
        </Carousel>
      }
    </div>
      
  )
}

export default StudentTestimonial
