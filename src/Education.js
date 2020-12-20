
import { education } from './Alldata';



const educationdata = ({ time, className, collegeName, detail }) => {
    return (

        <EducationDaa time={time} className={className} collegeName={collegeName} detail={detail} />)
}

const EducationDaa = ({ time, className, collegeName, detail }) => {
    return (
        <div className="e_detail">

            <div className="e_time">
                <p className="e_detail_work">{time}</p>
            </div>
            <div className="e_details">
                <p className="e_detail_coName">{className} </p>
                <p className="e_detail_content">{collegeName} </p>
                <p className="e_detail_detail">{detail} </p>
            </div>
        </div>
    )
}



function Education() {
    return (
        <div className="experience">
            <div className="experience_heading"><p>Education</p></div>
            {education.map(educationdata)}

        </div>
    );
}

export default Education;
