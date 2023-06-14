import React from "react-dom";
import { h } from "preact";

import Comet from "./Comet.tsx";
import Orbit from "./Orbit.tsx";
import Ufo from "./Ufo.tsx";
import AudioMenu from "./AudioMenu.tsx";

const App = () => {
    return <div id="app">
        <Ufo />
        <Orbit />
        <Comet />
        <AudioMenu />
    </div>
}

export default App;