import React from "react-dom";
import Comet from "./Comet.tsx";
import Orbit from "./Orbit.tsx";
import Ufo from "./Ufo.tsx";

const App = () => {
    return <div id="app">
        <Ufo />
        <Orbit />
        <Comet />
    </div>
}

export default App;