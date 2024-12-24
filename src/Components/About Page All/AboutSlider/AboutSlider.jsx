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

            
                

   <div className="container">
             <div className="slider-container">
             <Slider {...settings}>

            


   
                        <div>

                            <div className="Ab_single_slider">
                            
                                        <div className="Slider1">
                                        <h1>3,456</h1>
                                        <p>Tree’s planted</p>

                            
                                        </div>
                                    </div>
                            
                        </div>


                        <div>

                            <div className="Ab_single_slider">
                            
                                        <div className="Slider2">
                                        <h1>£10.5M</h1>
                                        <p>Raised in 2022</p>

                            
                                        </div>
                                    </div>
                            
                        </div>


                        <div>

                            <div className="Ab_single_slider">
                            
                                        <div className="Slider3">
                                        <h1>30,000</h1>
                                        <p>Another stat</p>

                            
                                        </div>
                                    </div>
                            
                        </div>




                           <div>

                            <div className="Ab_single_slider">
                            
                                        <div className="Slider4">
                                        <h1>3,456</h1>
                                        <p>Another stat</p>

                            
                                        </div>
                                    </div>
                            
                        </div>


        
             
           
             </Slider>
             </div>

    </div>
             
        

         
        );
      }


export default AboutSlider