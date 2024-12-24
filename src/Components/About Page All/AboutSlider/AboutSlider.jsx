import React from 'react'
import './AboutSlider.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const AboutSlider = () => 
   
   
    {
        var settings = {
          dots: false,
          infinite:true,
          speed: 500,
          slidesToShow: 4,
          slidesToScroll: 4,
          initialSlide: 0,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        };
        return (

            
                

             <div className="slider-container">
             <Slider {...settings}>



              <div>

                 <div className="single_slider">
                
                            <div className="Slider1">
                              <h1></h1>
                              <p></p>

                
                            </div>
                          </div>
                
              </div>


               <div>

                 <div className="single_slider">
                
                            <div className="Slider1">
                              <h1></h1>
                              <p></p>

                
                            </div>
                          </div>
                
              </div>





               <div>

                 <div className="single_slider">
                
                            <div className="Slider1">
                              <h1></h1>
                              <p></p>

                
                            </div>
                          </div>
                
              </div>

             
           
             </Slider>
             </div>

             
        

         
        );
      }


export default AboutSlider