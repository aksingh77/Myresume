import { Link } from '@material-ui/core';
import React, { useState } from 'react'

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

import musicData from '../musciData';
import './CopyMusic.css'

const CopyMusic = () => {
    const [index, setIndex] = useState(0);
    const previousMusic = () => {
        setIndex((index - 1 + musicData.length) % musicData.length);


    }
    const play = () => {
        const img = document.getElementById("imagge_class");
        img.classList.add("anime");
        img.classList.remove("anime_stop");

    }
    const pause = () => {
        const img = document.getElementById("imagge_class");
        img.classList.add("anime_stop");
        // img.classList.remove("anime");
    }
    return (
        <div className="copy_musci_section">
            <div className="copy_music">
                <Link to='/mongoformdata'><h2>checking</h2></Link>
                {/* {console.log(musicData[index].title)} */}
                <div className="music_container">
                    <h2 id="title">{musicData[index].title}</h2>
                    <h3 id="artist">{musicData[index].artist}</h3>
                    <div id="yahhoo" className="music_img_container">
                        <img id="imagge_class" alt="" style={{
                            backgroundImage: `url(${musicData[index].cover})`, width: '186px',
                            height: '186px', backgroundSize: 'cover'
                        }} />
                    </div>
                </div>
                {/* { musicData.map(musicSong)} */}
                <AudioPlayer
                    src={musicData[index].musicSrc}
                    onPlay={play}
                    onPause={pause}
                    showSkipControls={true}

                    autoPlayAfterSrcChange
                    onClickNext={() => setIndex((index + 1) % musicData.length)}
                    onClickPrevious={previousMusic}
                />
            </div>
        </div>
    )

};

export default CopyMusic;