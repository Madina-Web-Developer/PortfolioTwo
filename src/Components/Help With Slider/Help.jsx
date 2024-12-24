import React from 'react'
import './Help.css'
import { FaCircleArrowRight } from "react-icons/fa6";

const Help = () => {
  return (
    <>

    <div className="all_mina_head bg-[#F3F7F5] lg:py-[20px] py-[10px] lg:mt-[5%] lg-[15px]">

        <div className="container">
            <div className="help_head">
                <h1>How to help</h1>
                <p>Our goal is a world of net zero carbon emissions by 2050, with greater prosperity for all.</p>
            </div>
        </div>


        {/* --------  Slider Start ----------------- */}


        <div className="Slider ">


          <div className="single_slider">

            <div className="Slider1">
              <h1>Title</h1>
              <p>We focus on systems with the highest emissions and where our networks have the greatest opportunity to drive change.</p>
              <FaCircleArrowRight className='arrow' />

            </div>
          </div>



           <div className="single_slider">

            <div className="Slider2">
              <h1>Title</h1>
              <p>We focus on systems with the highest emissions and where our networks have the greatest opportunity to drive change.</p>
              <FaCircleArrowRight className='arrow' />

            </div>
          </div>



            <div className="single_slider">

            <div className="Slider3">
              <h1>Title</h1>
              <p>We focus on systems with the highest emissions and where our networks have the greatest opportunity to drive change.</p>
              <FaCircleArrowRight className='arrow' />

            </div>
          </div>



            <div className="single_slider">

            <div className="Slider4">
              <h1>Title</h1>
              <p>We focus on systems with the highest emissions and where our networks have the greatest opportunity to drive change.</p>
              <FaCircleArrowRight className='arrow'/>

            </div>
          </div>


          </div>
        </div>

    </>
  )
}

export default Help