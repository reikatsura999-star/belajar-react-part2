import { useState } from "react"
import UseRef from "./components/UseRef"
import { PortalReact } from "./components/PortalReact";
import Hocs from "./components/Hocs";
import Pattern from "./components/Patrren";


function App() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>

      {/* <UseRef />
      
      <button onClick={() => setOpen(true)}>Open Modal</button>
      <PortalReact isOpen={open} onClose={() => setOpen(false)}>
        <div style={{ background: 'white', padding: '20px', border: '1px solid black' }}>
          <h2>Ini adalah Konten Portal</h2>
          <p>Portal berhasil muncul!</p>
        </div>
      </PortalReact> */}

      {/* <Hocs /> */}

      <Pattern />
    </>
  )
}

export default App
