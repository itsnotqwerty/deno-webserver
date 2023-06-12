import { React } from "../dep.ts";

const Astronaut = () => {
    return <div id="astronautContainer">
        <img src="/static/images/astronaut.png" id="astronaut" alt="astronaut" />
        <audio id="astronautAudio" src="/static/audio/astronaut.mp3"></audio>
    </div>
}

export default Astronaut;