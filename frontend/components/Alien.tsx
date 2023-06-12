import { React } from "../dep.ts";

const Alien = () => {
    return <div id="alienContainer">
        <input type="checkbox" id="alienCtl" />
        <label htmlFor="alienCtl">
            <img src="/static/images/alien.png" id="alien" alt="alien" />
            <img src="/static/images/explosion.gif" id="explosion" alt="explosion" />
            <audio id="explosionAudio" src="/static/audio/explosion.mp3"></audio>
        </label>
    </div>
}

export default Alien;