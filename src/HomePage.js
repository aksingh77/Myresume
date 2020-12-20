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



const mydetail = ({ icon, data }) => {
    return (
        < Detail icon={icon} data={data} />
    )
}

const HomePage = () => {

    return (
        <div className="homepage_bg_color">
            <div className="homepage">
                <div className='homepage_color'>
                    <Color />
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
                        <p className="homepage_detail_content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed et molestias obcaecati aliquid quia totam odio quasi doloribus ipsa officia! Deleniti magnam magni neque, tempore maxime minima voluptatibus eos. Ea?</p>
                    </div>
                    <div className="contact_detail">
                        <div className="Contact_heading"><p>Contact</p></div>
                        {ContactDetail.map(mydetail)}
                    </div>
                    <div className="homepage_skill">
                        <div className="ak">
                            <div className="Contact_heading"><p>skill</p></div>
                            <Skill icon="fab fa-html5" data="HTML" />
                            <Skill icon="fab fa-css3-alt" data="CSS" />
                            <Skill icon="fab fa-react" data="JAVA SCRIPT" />
                            <Skill icon="fab fa-js" data="REACT" />
                            <Skill icon="fab fa-sass" data="SASS" />
                            <Skill icon="fab fa-bootstrap" data="Bootstrap" />

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
                        <p className="homepage_detail_content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed et molestias obcaecati aliquid quia totam odio quasi doloribus ipsa officia! Deleniti magnam magni neque, tempore maxime minima voluptatibus eos. Ea?</p>
                    </div>

                    <Experience />
                    <Education />
                </div>

            </div>
        </div>
    )
}
export default HomePage;