import React from "react-dom"; 
import { h } from "preact";

import AnimatedImage from "./AnimatedImage.tsx";
import ClickableImage from "./ClickableImage.tsx";

const Orbit = () => {
    return <div id="orbit">
        <AnimatedImage name="astronaut" img="astronaut.png" />
        <ClickableImage name="earth" img="earth.png" />
        <ClickableImage name="alien" img="alien.png" repl_name="explosion" repl_img="explosion.gif" />
    </div>
}

export default Orbit;