import React from 'react'
import './Team.css'

const Team = () => {
  return (
    <>

    <div className="all_mina_team">

        <div className="container">

            <div className="Team_heading">

            <p>
                  
                  Our {" "}
                    <span className="relative inline-block">
                       Team
                      <span className="T_under"></span>
                    </span>
                  </p>
                      

            </div>



                <div className="all_team_members">

                    

                    <div className="single_person">

                        <img src="public/Team1.png" alt="teampic" />
                        <h2>John Doe</h2>
                        <h3>CEO & Founder</h3>
                        <p>We're an international non-profit founded in 2003, with offices in London, New York, New Delhi, Amsterdam and Beijing.</p>

                    </div>

                     <div className="single_person">

                        <img src="public/Team2.png" alt="teampic" />
                        <h2>Jane Doe</h2>
                        <h3>Co-Founder & Head of Marketing</h3>
                        <p>We're an international non-profit founded in 2003, with offices in London, New York, New Delhi, Amsterdam and Beijing.</p>

                    </div>


                     <div className="single_person">

                        <img src="public/Team3.png" alt="teampic" />
                        <h2>Jonh Smith</h2>
                        <h3>CTO</h3>
                        <p>We're an international non-profit founded in 2003, with offices in London, New York, New Delhi, Amsterdam and Beijing.</p>

                    </div>



                     <div className="single_person">

                        <img src="public/Team4.png" alt="teampic" />
                        <h2>Jane Smith</h2>
                        <h3>Head of Data</h3>
                        <p>We're an international non-profit founded in 2003, with offices in London, New York, New Delhi, Amsterdam and Beijing.</p>

                    </div>

                </div>
            
        </div>
    </div>
    
    
    
    </>
  )
}

export default Team