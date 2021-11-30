import React from 'react';
import Carousel from 'react-elastic-carousel';

function Video({ data }) {

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
          data.map((video) => {
            const { id, src} = video;
            return (
              <div className="single_items lios_item">
                <div className="vdoSect border">
                  <div className="_vdo_flex">
                    <iframe width="100%" height="175" src={src}>
                    </iframe>
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

export default Video
