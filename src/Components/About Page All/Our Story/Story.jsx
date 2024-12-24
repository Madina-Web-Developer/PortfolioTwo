import React from 'react'
import './Story.css'
import { Link } from 'react-router-dom'

const Story = () => {
  return (
  <>

  <div className="mina_Our_story">

  
    
    <div className="container">


              <div className='flex justify-center items-center'>
                <div className="all_story">

                    <div className="story_text">

                        <div className="story_heading">

                        <p>
                          
                        Our {" "}
                          <span className="relative inline-block">
                            story
                            <span className="S_under"></span>
                          </span>
                        </p>
                            
                        </div>

                        <div className="story_para">
                          <p>
                          We're an international non-profit founded in 2003, with offices in London, New York, New Delhi, Amsterdam and Beijing.
                          <br /><br />

                          In that time, we’ve grown our network to include over 500 multinational businesses in 175 markets worldwide. The Under2 Coalition, for which we are the Secretariat, is made up of over 260 governments globally, representing 1.75 billion people and 50% of the global economy.
                          </p>
                        </div>

                        <div className="story_button">
                        <button className='button'><Link to={'#'} ></Link>Join the cause</button>
                        </div>

                    </div>

                </div>
               
                {/* <div>
              <img src="public/AboutGP.png" alt="gpimg" />
            </div>
             */}

            </div>
    </div>
  </div>


    
  </>
  )
}

export default Story