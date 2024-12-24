import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div className="mina_nav bg-white">

        <div className="container">

            <div className="nav_all flex justify-between items-center lg:py-[10px] py-[3px]">
                <div className="logo">
                    <img src="public/Logo.png" alt="Logo" />
                </div>

                <div className="mina_ul">

                    <ul>

                        <li><Link to={'/'}  >Home</Link></li>
                        <li><Link to={'/about'}  >About</Link></li>
                        <li><Link to={'#'}  >Contact</Link></li>
                        <li><Link to={'#'}  >Help</Link></li>

                    </ul>
                </div>

                <div className="nav_buttons flex gap-[13px]">

                    <button className='nav_button'><Link to={'#'} ></Link>Start Free Trial</button>
                    <button className='nav_button'><Link to={'#'} >Login</Link></button>
                </div>


            </div>

        </div>
    </div>
    </>
  )
}

export default Navbar