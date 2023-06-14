import React from "react-dom"; 
import { h } from "preact";

const Earth = () => {
    return <div id="earthContainer">
        <input type="checkbox" id="earthCtl" />
        <label htmlFor="earthCtl"><img src="/static/images/earth.png" id="earth" alt="earth" /></label>
    </div>
}

export default Earth;