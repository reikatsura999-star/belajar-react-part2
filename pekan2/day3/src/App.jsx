import { useState } from "react"
import SimpleEffect from "./components/SimpleEffect.jsx"
import WithDepedency from "./components/WithDepedency.jsx"
import TrackerWindow from "./components/TrackerWindow.jsx";
import MultipleUseEffect from "./components/MultipleUseEffect.jsx";
import SimulasiFetch from "./components/SimulasiFetch.jsx";

function App() {
   const [idUser, setIdUser] = useState(1);
   const [IdPlayer, setIdPlayer] = useState(1);
  
  return(
    <>
    {/* <SimpleEffect/> */}
    {/* <WithDepedency userId={idUser}/> */}

    {/* <button onClick={() => setIdUser(id + 1)}>Update ID</button> */}
    
    <br/>
    {/* <TrackerWindow/> */}

    <br/>

    {/* <MultipleUseEffect/> */}

    <br/>
    <SimulasiFetch idPlayer={IdPlayer} />
    <button onClick={() => setIdPlayer(IdPlayer + 1)}>Next Player</button>

    </>
  )
  
  
}

export default App
