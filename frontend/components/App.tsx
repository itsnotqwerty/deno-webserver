import { React } from "../dep.ts";
import Comet from "./Comet.tsx";
import Orbit from "./Orbit.tsx";
import Ufo from "./UFO.tsx";

const App = () => {
    return <div id="root">
        <Orbit />
        <Comet />
        <Ufo />
    </div>
}

export default App;