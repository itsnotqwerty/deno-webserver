import { React } from "../dep.ts";

const Earth = () => {
    return <div id="earthContainer">
        <input type="checkbox" id="earthCtl" />
        <label htmlFor="earthCtl"><img src="/static/images/earth.png" id="earth" alt="earth" /></label>
        <audio id="bonkAudio" src="/static/audio/bonk.mp3"></audio>
    </div>
}

export default Earth;