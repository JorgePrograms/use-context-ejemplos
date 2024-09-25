import { useContext } from "react"
import { TemaContext } from "./TemaContext"

const Boton=() =>{
    const { valor, generandoCambios } =useContext(TemaContext);

    if(valor===undefined){
        return <p>Error: contexto no disponible</p>
    }

    return(
        <>
        <br />
        <button onClick={generandoCambios}>Cambiar Temas</button>
        <p>{valor}</p>
        </>
        
    )
}

export default Boton;