import React, {useEffect} from "react";
import useForms from "./components/useForms"

function App() {

    const[value,handleChange]=useForms({
        firstname:"",
        lastname:"",
    })

    useEffect(()=>{
        console.log("running")
    },[value.lastname])

    const handleClick=(event)=>{
        event.preventDefault()
        console.log(value)
    }

  return (
    <div >
     <form autoComplete="off">
         <input type="text" name="firstname" value={value.firstname} onChange={handleChange}/>
         <input type="text" name="lastname" value={value.lastname} onChange={handleChange}/>
         <button onClick={handleClick}>Display</button>
     </form>
    </div>
  );
}

export default App;
