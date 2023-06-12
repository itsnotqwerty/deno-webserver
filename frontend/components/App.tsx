import { React } from "../dep.ts"; 
import Comet from "./Comet.tsx";
import Orbit from "./Orbit.tsx";
import Ufo from "./Ufo.tsx";

const App = () => {
    return <div id="root">
        <Ufo />
        <Orbit />
        <Comet />
    </div>
}

export default App;