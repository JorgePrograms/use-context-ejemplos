import { useContext } from "react";
import { NumeroContext } from "./NumeroContext";



const Boton = ()=>{

    const {valor, avanzar, retroceder}= useContext(NumeroContext)

    return(
        <div>
       
            <button onClick={retroceder}>retroceder</button>
            <button onClick={avanzar}>avanzar</button>
            <p>valor {valor}</p>
        </div>
        
    )
}



export default Boton;