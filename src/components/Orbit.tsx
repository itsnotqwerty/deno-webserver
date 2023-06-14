import React from "react-dom"; 
import { h } from "preact";

import Earth from "./Earth.tsx";
import Alien from "./Alien.tsx";
import AnimatedImage from "./AnimatedImage.tsx";

const Orbit = () => {
    return <div id="orbit">
        <AnimatedImage name="astronaut" img="astronaut.png" />
        <Earth />
        <Alien />
    </div>
}

export default Orbit;