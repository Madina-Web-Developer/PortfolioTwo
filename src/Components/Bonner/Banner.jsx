import React from 'react'
import './Banner.css'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <>

    <div className="mina_banner">

        <div className="bg">
            <img className='' src="public/RT.png" alt="bg" />
        </div>

        <div className="container">
            <div className="all_banner">

                <div className="banner_text">

                    <div className="b_head">
                         <p>
                             Think positive <br />
                             about our{" "}
                             <span className="relative inline-block">
                                Climate
                                <span className="b_under"></span>
                             </span>
                           </p>
                    </div>

                    <div className="para">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget maecenas eget sit et rhoncus. Sit consectetur.</p>
                    </div>

                    <div className="input">

                        <div className="banner_button flex justify-between items-center">
                        <input type="email" placeholder='name@company.com' />
                        <button>
                            <Link pth={'#'}>Sign up</Link>
                        </button>

                        </div>
                    </div>

                </div>

                <div className="banner_img">

                    <img src="public/Bannerimg.png" alt="banner_img" />

                </div>

            </div>
        </div>

    </div>
    </>
  )
}

export default Banner