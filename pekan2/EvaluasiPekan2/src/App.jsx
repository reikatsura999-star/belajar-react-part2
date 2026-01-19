import { useState } from "react";
import Home from "./page/Home";

function App() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('all')

  return (
    <>
     <Home 
      search={search}
      setSearch={setSearch}
      category={category}
      setCategory={setCategory}
     />
    </>
  )
}

export default App;