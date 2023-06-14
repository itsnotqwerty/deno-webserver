import React from "react-dom";
import { h } from "preact";

import Orbit from "./Orbit.tsx";
import AudioMenu from "./AudioMenu.tsx";
import AnimatedImage from "./AnimatedImage.tsx";

const App = () => {
    return <div id="app">
        <AnimatedImage name="ufo" img="ufo.png" />
        <Orbit />
        <AnimatedImage name="comet" img="comet.png" />
        <AudioMenu />
    </div>
}

export default App;