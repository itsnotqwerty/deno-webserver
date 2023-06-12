import React from "react-dom"; 
import { h } from "preact";

const Ufo = () => {
    return <div id="ufoContainer">
        <img src="/static/images/ufo.png" id="ufo" alt="ufo" />
        <audio id="ufoAudio" src="/static/audio/ufo.mp3"></audio>
    </div>
}

export default Ufo;