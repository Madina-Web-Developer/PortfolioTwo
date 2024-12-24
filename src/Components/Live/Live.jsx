import React from 'react'
import './Live.css'
import { Link } from 'react-router-dom'

const Live = () => {
  return (
    <>

    <div className="live_mina">
        <div className="live">
            <div className="live_bg">
                <img src="public/LiveTR.png" alt="Traingle" />
            </div>
            <div className="container">

                <div className="Live_single_mina_card flex justify-end lg:gap-[30px] gap-[15px]">

                    <div className="single_live_card">

                        <div className="text">
                        <h1>
                            <span className="relative z-[10] inline-block">
                            Live 
                            <span
                                className='live_under'
                            ></span>
                            </span>{" "}
                            sustainably
                        </h1>

                        <p>
                        We’ve compiled a list of effective ways to reduce your environmental footprint. The biggest game changers are labelled "top tips".
                        </p>

                        <button className='tree_button'>
                        <Link path={'#'}>Find Out</Link>
                        </button>

                        </div>

                        <div className="card_img">
                            <img src="public/Live.png" alt="natureimg"/>
                        </div>


                    </div>

                </div>
            </div>
        </div>
    </div>
    
    
    
    </>
  )
}

export default Live