import React from 'react';

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import WorkIcon from '@material-ui/icons/Work';
import './Project.css';
import projectData from './projectData';



const por = ({ time }, i) => {
    console.log(time)
    return (< VerticalTimelineElement key={i}
        className="vertical-timeline-element--work tt"
        // contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }
        // }
        // contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
        date={time}
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={< WorkIcon />}
        id='tt'
    >
        <h3 className="vertical-timeline-element-title">Creative Director</h3>
        <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
        <p>
            Creative Direction, User Experience, Visual Design, Project Management, Team Leading
    </p>
    </VerticalTimelineElement >)
}
const Project = () => {
    return (
        <div className="project_timeline">
            <div className="project_timeline_body">
                <VerticalTimeline>

                    {projectData.map(por)}

                </VerticalTimeline>
            </div>
        </div>
    )
}
export default Project;