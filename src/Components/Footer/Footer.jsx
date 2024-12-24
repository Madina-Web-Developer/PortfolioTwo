import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import { FaFacebookF } from "react-icons/fa6";

const Footer = () => {
  return (
   <>
    <div className="all_mina_footer lg:py-[4%] py-[1%] bg-[#FFFFFF] mt-[4px] lg:mt-[10px]">

        <div className="footer">
            <div className="container">

                <div className="f_text">

                    <div className="footer_logo">

                        <Link to={'/'}><img src="public/Logo.png" alt="Logo" /></Link>
                        
                    </div>


                    <div className="all_footer_ul flex flex-wrap lg:gap-[4%] xl:gap-[8%] gap-[28px] lg:mt-[30px] mt-[18px] ">

                        <div className="single_ul lg:mb-[5%] mb-[15px]">

                            <ul className=' flex'>
                                <li className='flex lg:gap-[25px] gap-[7px] flex-col'>
                                    <Link to={'#'} className='f_ul_head'><h1>Product</h1></Link>
                                    <Link to={'#'}> <h2>Individuals</h2> </Link>
                                    <Link to={'#'}> <h2>Team</h2> </Link>
                                    <Link to={'#'}> <h2>Enterprise</h2> </Link>
                                    <Link to={'#'}> <h2>Pricing</h2> </Link>
                                    <Link to={'#'}> <h2>Technology</h2> </Link>
                                    <Link to={'#'}> <h2>Security </h2> </Link>
                                    <Link to={'#'}> <h2>Integrations</h2> </Link>
                                      
                                </li>
                            </ul>
                        </div>


                         <div className="single_ul">

                            <ul className=' flex '>
                                <li className='flex lg:gap-[20px] gap-[12px] flex-col'>
                                    <Link to={'#'} className='f_ul_head'><h1>Company</h1></Link>
                                    <Link to={'#'}> <h2>About</h2> </Link>
                                    <Link to={'#'}> <h2>Careers</h2> </Link>
                                    <Link to={'#'}> <h2>Login</h2> </Link>
                                    <Link to={'#'}> <h2>Sign Up</h2> </Link>
                                    <Link to={'#'}> <h2>News</h2> </Link>
                                    
                                      
                                </li>
                            </ul>
                        </div>


                         <div className="single_ul">

                            <ul className=' flex'>
                                <li className='flex lg:gap-[15px] gap-[7px] flex-col'>
                                    <Link to={'#'} className='f_ul_head'><h1>Resources</h1></Link>
                                    <Link to={'#'}> <h2>How-tos</h2> </Link>
                                    <Link to={'#'}> <h2>Case studies</h2> </Link>
                                    <Link to={'#'}> <h2>Help</h2> </Link>
                                    
                                      
                                </li>
                            </ul>
                        </div>




                         <div className="single_ul">

                            <ul className=' flex'>
                                <li className='flex lg:gap-[15px] gap-[7px] flex-col'>
                                    <Link to={'#'} className='f_ul_head'><h1>Headquarters</h1></Link>
                                    <Link to={'#'}> <h2>Your company <br />
                                                    address, Street,<br />
                                                    & name</h2> </Link>
                                      
                                </li>
                            </ul>
                        </div>


                         <div className="single_ul">

                            <ul className=' flex'>
                                <li className='flex lg:gap-[15px] gap-[7px] flex-col'>
                                    <Link to={'#'} className='f_ul_head'><h1>North America</h1></Link>
                                    <Link to={'#'}> <h2>Your company <br />
                                                    address, Street,<br />
                                                    & name</h2> </Link>
                                                                                    
                                      
                                </li>
                            </ul>
                        </div>





                         <div className="single_ul">

                            <ul className=' flex'>
                                <li className='flex lg:gap-[15px] gap-[7px] flex-col'>
                                    <Link to={'#'} className='f_ul_head'><h1>Connect</h1></Link>
                                    <div className="Footer_all_logo">
                                    <Link to={'#'}> <img src="public/Bird.png" alt="logo" /> </Link>
                                    <Link to={'#'}> <FaFacebookF className='lg:text-[20px] text-[10px] '  /> </Link>
                                    <Link to={'#'}> <img src="public/linkdin.png" alt="logo" /> </Link>
                                    </div>
                                      
                                </li>
                            </ul>
                        </div>




                         <div className="single_ul">

                            <ul>
                                <li className='flex lg:gap-[15px] gap-[7px] flex-col'>
                                    <Link to={'#'} className='f_ul_head'><h1>Apps</h1></Link>

                                    <div className="f_last_logo flex flex-col justify-start items-start">
                                    
                                     <Link to={'#'}>

                                    <img className='App'  src="public/App.png" alt="Appstore" />
                                    
                                    </Link>

                                    <Link to={'#'}>

                                    <img className=' Google' src="public/Google (2).png" alt="Google" />
                                    
                                    </Link>


                                    </div>
                                   
                                   
                                </li>
                            </ul>
                        </div>


                       
                       
                    </div>

                   <div className="f_underline">
                    <span><div className='f_u'></div></span>
                   </div>

                  <div className="all_last_text flex justify-between items-center">

                    <div className="lift_text">
                        <h3>Copyright 2022 Dan Williams™</h3>
                    </div>

                    <div className="_right_side flex lg:gap-[21px] xl:gap[25px] md:gap-[16px] gap-[13px]">

                        <h3>Privacy Policy </h3>
                        <h3>Terms of Use</h3>
                        <h3>DMCA and Copyright Abuse Policy</h3>
                    </div>


                  </div>

                </div>

            </div>
        </div>
        
        </div>
   </>
  )
}

export default Footer