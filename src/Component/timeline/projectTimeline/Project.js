import { Toolbar } from '@material-ui/core';
import React from 'react';

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import './Project.css';
import projectData from './projectData';



const por = ({ title, desc, icon }, i) => {
    // console.log(time)
    return (< VerticalTimelineElement key={i}
        className="vertical-timeline-element--work tt"
        // contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }
        // }
        // contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
        // date={time}
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={icon}
        id='tt'
    >
        <h3 className="vertical-timeline-element-title">{title}</h3>
        {/* <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4> */}
        <p><a href={desc} rel="noreferrer" target="_blank">{desc}</a></p>
    </VerticalTimelineElement >)
}
const Project = () => {
    return (
        <div className="project_timeline">
            <Toolbar />
            <div className="project_timeline_body">
                <VerticalTimeline>

                    {projectData.map(por)}

                </VerticalTimeline>
            </div>
        </div>
    )
}
export default Project;