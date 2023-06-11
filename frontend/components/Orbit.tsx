import { React } from "../dep.ts";
import Earth from "./Earth.tsx";
import Alien from "./Alien.tsx";

const Orbit = () => {
    return <div id="orbit">
        <Earth /> <Alien />
    </div>
}

export default Orbit;