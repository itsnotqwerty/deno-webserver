import React from "react-dom"; 
import Earth from "./Earth.tsx";
import Alien from "./Alien.tsx";
import Astronaut from "./Astronaut.tsx";

const Orbit = () => {
    return <div id="orbit">
        <Astronaut />
        <Earth />
        <Alien />
    </div>
}

export default Orbit;