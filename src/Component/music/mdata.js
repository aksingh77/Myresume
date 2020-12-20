import musicData from './musciData';


let itsPlay = false;
export const pauseMusic = () => {
    const musics = document.querySelector('audio');
    const imgs = document.querySelector("img");
    const play = document.getElementById("play");
    itsPlay = false;
    musics.pause();
    play.classList.replace("fa-pause", "fa-play");
    imgs.classList.remove("anime");
}

export const playMusic = () => {
    const musics = document.querySelector('audio');
    const imgs = document.querySelector("img");
    const play = document.getElementById("play");
    itsPlay = true;
    musics.play();
    play.classList.replace("fa-play", "fa-pause");
    imgs.classList.add("anime");
}
export const playAndPaus = () => {
    if (itsPlay) {
        pauseMusic();
    }
    else {
        playMusic();
    }

    // itsPlay ? pauseMusic() : playMusic();
}

let index = 0;
export const loadSong = (musicData) => {
    const title = document.getElementById("title");
    const artist = document.getElementById("artist");
    const musics = document.querySelector('audio');
    title.innerText = musicData.title;
    artist.innerText = musicData.artist;
    musics.src = musicData.musicSrc;
    // console.log(musics);
}
export const prevMusic = () => {
    index = (index - 1 + musicData.length) % musicData.length;
    loadSong(musicData[index]);
    itsPlay ? playMusic() : pauseMusic();
}
export const nextMusic = () => {
    index = (index + 1) % musicData.length;
    loadSong(musicData[index]);
    itsPlay ? playMusic() : pauseMusic();

}