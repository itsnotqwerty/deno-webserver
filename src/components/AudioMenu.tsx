import React from "react-dom";
import { h } from "preact";

const AudioMenu = () => {
    return <div id="audio-menu">
        <div id="mute-button">
            <input type="checkbox" id="audio-mute" />
            <label htmlFor="audio-mute">Mute</label>
        </div>
        <div id="audio-slider">
            <input type="range" min="0" max="100" value="70" class="slider" id="audio-range" />
            <label htmlFor="audio-range">Volume</label>
        </div>
    </div>
}

export default AudioMenu