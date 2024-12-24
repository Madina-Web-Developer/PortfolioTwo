import React from 'react'
import './Plant.css'
import { Link } from 'react-router-dom'

const Plant = () => {
  return (
   <>

<div className="mina_plant">

   

    <div className="plant_bg">
        <img src="public/Circle.png" alt="backgroundimg" />
    </div>

    <div className="container">

        {/* ------- left & Right side lathi */}

     <div className="left_stand"> </div>
     <div className="right_stand"> </div>

        <div className="plant_all flex justify-start xl:ml-[5px] lg:ml-[8px] ml-[3px]">
            <div className="single_plant_card">

                <div className="all_text">
                <h1>
                    <span className="relative z-[10] inline-block">
                    Plant
                    <span
                        className='tree_under'
                    ></span>
                    </span>{" "}
                    a tree
                </h1>

                <p>
                We’ve compiled a list of effective ways to reduce your environmental footprint. The biggest game changers are labelled "top tips".
                </p>

                <button className='tree_button'>
                 <Link path={'#'}>Find Out</Link>
                </button>

                </div>

                <div className="card_img">
                    <img src="public/plant.png" alt="natureimg"/>
                </div>

            
            </div>
        </div>

    </div>

</div>
   </>
  )
}

export default Plant