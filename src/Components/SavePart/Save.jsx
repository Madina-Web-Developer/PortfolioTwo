import React from 'react'
import './Save.css'
import { Link } from 'react-router-dom'

const Save = () => {
  return (
    <>

<div className="live_mina">
        <div className="live">
           
            <div className="container">

            <div className="save_bg">
                <img src="public/Circlefull.png" alt="Trainglefull" />
            </div>

                <div className="Save_single_mina_card flex justify-end lg:gap-[30px] gap-[15px]">

                    <div className="single_save_card">

                        <div className="text_save">
                        <h1>
                            <span className="relative z-[10] inline-block">
                            Live 
                            <span
                                className='save_under'
                            ></span>
                            </span>{" "}
                            sustainably
                        </h1>

                        <p>
                        We’ve compiled a list of effective ways to reduce your environmental footprint. The biggest game changers are labelled "top tips".
                        </p>

                        <button className='save_button'>
                        <Link to={'#'}>Find Out</Link>
                        </button>

                        </div>

                        <div className="card_img">
                            <img src="public/Save.png" alt="natureimg"/>
                        </div>


                    </div>

                </div>
            </div>
        </div>
    </div>
    


    
    
    
    </>
  )
}

export default Save