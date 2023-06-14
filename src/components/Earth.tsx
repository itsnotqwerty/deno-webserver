import React from "react-dom"; 
import { h } from "preact";

const Earth = () => {
    return <div id="earth-container">
        <input type="checkbox" id="earth-controls" />
        <label htmlFor="earth-controls">
            <img src="/static/images/earth.png" id="earth" alt="earth" />
        </label>
    </div>
}

export default Earth;