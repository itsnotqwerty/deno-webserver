import React from "react-dom"; 
import { h } from "preact";

const Comet = () => {
    return <div>
        <img src="/static/images/comet.png" id="comet" alt="comet" />
        <audio id="cometAudio" src="/static/audio/comet.mp3"></audio>
    </div>
}

export default Comet;