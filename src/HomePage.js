import React from 'react';

// import my image
import Myimg from "./img/KA.jpg";

import './HomePage.css';
// import alldata 
import ContactDetail from './Alldata';

// import detail component
import Detail from './Detail';
import Skill from './Skill';
import Hobbies from './Hobbies';
import Experience from './Experience';
import Education from './Education';
import Color from './Color';



const mydetail = ({ icon, data, link }, id) => {
    return (
        < Detail key={id} icon={icon} data={data} link={link} />
    )
}

const HomePage = () => {

    return (
        <div className="homepage_bg_color">
            <div className="homepage">
                <div className="homepage_new_color">
                    <div className='homepage_color'>
                        <Color />
                    </div>
                </div>


                <div className="left_side">
                    <div className="homepage_img">
                        <img src={Myimg} alt="Myimage" />
                    </div>
                    <div className="homepage_detail homepage_media">
                        <h4>AMIT PRATAP SINGH</h4>
                        <span className="homepage_detail_profile">
                            Web Developer
                </span>
                        <p className="homepage_detail_content">To work with an organization where I can utilize my potential up to optimum level in achieving the goals or standards set by an organization. I always enjoy working on Web Application Development on PHP and want to do thing practically.</p>
                    </div>
                    <div className="contact_detail">
                        <div className="Contact_heading"><p>Contact</p></div>
                        {ContactDetail.map(mydetail)}
                    </div>
                    <div className="homepage_skill">
                        <div className="ak">
                            <div className="Contact_heading"><p>skill</p></div>
                            <Skill icon="fab fa-html5" data="HTML" link='/commingsoon' />
                            <Skill icon="fab fa-css3-alt" data="CSS" link='/commingsoon' />
                            <Skill icon="fab fa-react" data="JAVA SCRIPT" link='/commingsoon' />
                            <Skill icon="fab fa-js" data="REACT" link='/commingsoon' />
                            <Skill icon="fab fa-sass" data="SASS" link='/commingsoon' />
                            <Skill icon="fab fa-bootstrap" data="Bootstrap" link='/commingsoon' />

                        </div>
                    </div>
                    <div className="homepage_hobbis">
                        <div className="hobies">
                            <div className="Contact_heading"><p>Hobbies</p></div>
                            <Hobbies />
                        </div>
                    </div>
                </div>
                <div className="right_side">
                    <div className="homepage_detail homepage_desktop">
                        <h4>AMIT PRATAP SINGH</h4>
                        <span className="homepage_detail_profile">
                            Web Developer
                </span>
                        <p className="homepage_detail_content">To work with an organization where I can utilize my potential up to optimum level in achieving the goals or standards set by an organization. I always enjoy working on Web Application Development on PHP and want to do thing practically.</p>
                    </div>

                    <Experience />
                    <Education />
                </div>

            </div>
        </div>
    )
}
export default HomePage;