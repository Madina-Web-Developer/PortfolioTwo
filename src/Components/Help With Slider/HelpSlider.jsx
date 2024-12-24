import React from 'react'

import './HelpSlider.css'
import { FaCircleArrowRight } from "react-icons/fa6";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';



const HelpSlider = () => 



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
            <div className="all_mina_head bg-[#F3F7F5] lg:py-[20px] py-[10px] lg:mt-[5%] lg-[15px]">


              <div className="container">
                 <div className="help_head">
                     <h1>How to help</h1>
                    <p>Our goal is a world of net zero carbon emissions by 2050, with greater prosperity for all.</p>

                  </div>

              <div/>

              </div>
                

             <div className="slider-container">
             <Slider {...settings}>


            


              <div>

                 <div className="single_slider">
                
                            <div className="Slider1">
                              <h1>Title</h1>
                              <p>We focus on systems with the highest emissions and where our networks have the greatest opportunity to drive change.</p>
                              <FaCircleArrowRight className='arrow' />
                
                            </div>
                          </div>
                
              </div>

              <div>
                
                           <div className="single_slider">
                
                            <div className="Slider2">
                              <h1>Title</h1>
                              <p>We focus on systems with the highest emissions and where our networks have the greatest opportunity to drive change.</p>
                              <FaCircleArrowRight className='arrow' />
                
                            </div>
                          </div>
              </div>

              <div>
                  <div className="single_slider">
               
                           <div className="Slider3">
                             <h1>Title</h1>
                             <p>We focus on systems with the highest emissions and where our networks have the greatest opportunity to drive change.</p>
                             <FaCircleArrowRight className='arrow' />
               
                           </div>
                         </div>
               
              </div>

              <div>
               
                           <div className="single_slider">
               
                           <div className="Slider4">
                             <h1>Title</h1>
                             <p>We focus on systems with the highest emissions and where our networks have the greatest opportunity to drive change.</p>
                             <FaCircleArrowRight className='arrow'/>
               
                           </div>
                         </div>
              </div>

             

              
           
             </Slider>
             </div>

             
          </div>

         
        );
      }

export default HelpSlider