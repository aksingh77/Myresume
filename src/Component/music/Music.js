import './Music.css'

import img from "./img/one.png";
import music from "./song/amit1.mp3";

import { playAndPaus, prevMusic, nextMusic } from './mdata'
import { Link } from 'react-router-dom';
const Music = () => {

    return (
        <div className="music_section">

            <div className="music_container">
                <p className="music_newList"><Link to="/musiccopy">Music play using Module</Link></p>
                <h2 id="title">LOTUS LANE</h2>
                <h3 id="artist">The Loyalist</h3>
                <div id="yahhoo" className="music_img_container">
                    <img src={img} alt="" />
                </div>
                <audio id="audio" src={music}></audio>
                {/* ------------------progress bar------------ */}
                <div className="progess_bar_container" id="progess_container">
                    <div className="progress_duration_meter">
                        <div id="current_time">0.00</div>
                        <div id="duration">1.00</div>
                    </div>
                    <div className="progress_div" id="progress_div">
                        <div className="progress" id="progress"></div>
                    </div>
                </div>
                {/* -------------controls------------ */}
                <div className="music_controls">
                    <i className="fas fa-backward" id="prev" title="previous" onClick={prevMusic}></i>
                    <i className="fas fa-play" id="play" title="play" onClick={playAndPaus}></i>
                    <i className="fas fa-forward" id="next" title="next" onClick={nextMusic}></i>

                </div>
            </div>
        </div>
    )
}


export default Music;