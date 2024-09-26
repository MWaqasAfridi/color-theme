import React, { useContext } from 'react'
import { userContext } from '../App';



const ChildC = () => {
const {theme,setTheme}=useContext(userContext);
function handleClick(){
    if(theme === "light"){
        setTheme("dark")
    }
    else{
        setTheme("light")
    }
}
  return (
    <div>
      <button onClick={handleClick} className='border text-white border-blue-500 p-1 rounded-md'>Change Theme</button>
    </div>
  )
}

export default ChildC