import { createContext, useState } from "react"
import ChildA from "./components/ChildA"

const userContext = createContext();

function App() {
 const [theme, setTheme] = useState({name:"light"}) 
  return (
    <>

    <userContext.Provider value={{theme,setTheme}}>
      <div style={{background:theme ==="light"?"green":"black"}} className="border border-red-500 rounded-md w-96 h-96 flex justify-center items-center m-10 bg-cyan-200">
      <ChildA />
      </div>
    </userContext.Provider>
    
    </>
  )
}

export default App
export {userContext}
