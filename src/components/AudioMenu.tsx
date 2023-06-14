import React from "react-dom";
import { h } from "preact";

const AudioMenu = () => {
    return <div id="audio-menu">
        <input type="range" min="0" max="100" value="70" class="slider" id="audio-range" />
        <input type="checkbox" id="audio-mute" />
        <label htmlFor="audio-mute">Mute</label>
    </div>
}

export default AudioMenu