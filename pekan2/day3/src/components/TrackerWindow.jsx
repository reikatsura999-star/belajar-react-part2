import { useState,useEffect } from "react";
function TrackerWindow(){
   const [height, setHeight] = useState(window.innerHeight);
   const [width, setWidth] = useState(window.innerWidth);
    const [show, setShow] = useState(true);

   useEffect(() => {
      const handleRezise = () => {
         setHeight(window.innerHeight);
         setWidth(window.innerWidth);
      }

      window.addEventListener('rezise',handleRezise);

      return() =>{
         window.removeEventListener('rezise',handleRezise)
      }
   },[])

   return(
      <>
      <button onClick={() => setShow(!show)}>Toggle</button>
      {show && (
         <div>
            <p>Height: {height}</p>
            <p>Width: {width}</p>
         </div>
      )}
      </>
   )
}

export default TrackerWindow;