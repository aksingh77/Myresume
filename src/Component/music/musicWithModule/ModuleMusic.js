import React from 'react';

// import AudioPlayer from 'react-h5-audio-player';
// import 'react-h5-audio-player/lib/styles.css';

// import music from "../song/amit1.mp3";
import musicData from '../musciData';
// import cover from "../img/one.png";

import ReactJkMusicPlayer from 'react-jinke-music-player'
import 'react-jinke-music-player/assets/index.css'
import { Link } from '@material-ui/core';


const ModuleMusic = () => {
    return (
        <div className="moudule_music">

            <ReactJkMusicPlayer audioLists={musicData} autoPlay={false} />
        </div>

    )
}

export default ModuleMusic;