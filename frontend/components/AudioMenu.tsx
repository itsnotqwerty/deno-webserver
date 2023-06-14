import React from "react-dom";
import { h } from "preact";

const AudioMenu = () => {
    return <div id="audioMenu">
        <input type="range" min="0" max="100" value="100" class="slider" id="audioRange" />
        <input type="checkbox" id="audioMute" />
        <label htmlFor="audioMute">Mute</label>
    </div>
}

export default AudioMenu