import './Experience.css';

import { experience } from './Alldata';
import { Link } from 'react-router-dom';
// import ExperienceDaa from './ExperienceDaa';



const experiencedata = ({ time, workAs, coName, detail }) => {
    // console.log(value);
    return (

        <ExperienceDaa time={time} workAs={workAs} coName={coName} detail={detail} />)
}

const ExperienceDaa = ({ time, workAs, coName, detail }) => {
    // console.log("the prop si", props);
    return (
        <div className="e_detail">

            <div className="e_time">
                <p className="e_detail_work">{time}</p>
            </div>
            <div className="e_details">
                <p className="e_detail_coName">{workAs} </p>
                <p className="e_detail_content">{coName} </p>
                <p className="e_detail_detail">{detail} </p>
            </div>
        </div>
    )
}



function Experience() {
    return (
        <div className="experience">
            {/* <div class="experience_heading"><p>Experience</p></div>
            <ExperienceData time="2014-2015"
                workAs="Intern"
                coName="fm" /> */}
            <div className="experience_heading"><p>Experience</p></div>
            {experience.map(experiencedata)}
            <div className="show_project"><Link to="/project">View Project</Link></div>
        </div>
    );
}

export default Experience;
