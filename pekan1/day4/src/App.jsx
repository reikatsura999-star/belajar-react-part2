import Box from "./components/Box"
import DynamicStyle from "./components/AlretBox"
import Greeting from "./components/Greeting"
import Profile from "./components/Profile"
import AlertBox from "./components/AlretBox"
import ResponsiveInfo from "./components/ResponsiveInfo"


function App() {


  return (
    <>
     <div>
       <div>
       <ResponsiveInfo/>
       <br/>
        <Profile />
        <br/>
        <Greeting />
        <br/>
        <Box/>
        <br/>
        <AlertBox type="success" children='pick me'/>
        <AlertBox type="error" children='pick me'/>
        <AlertBox type="warning" children='pick me'/>
        <br/>
        
      </div>
     </div>
    </>
  )
}

export default App
