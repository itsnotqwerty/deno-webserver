import React from "react-dom"; 
import { h } from "preact";

const Alien = () => {
    return <div id="alien-container">
        <input type="checkbox" id="alienCtl" />
        <label htmlFor="alienCtl">
            <img src="/static/images/alien.png" id="alien" alt="alien" />
            <img src="/static/images/explosion.gif" id="explosion" alt="explosion" />
        </label>
    </div>
}

export default Alien;