import { createContext, useState } from "react";


const TemaContext=createContext();
const TemaContextProvider=({children})=>{
    const[valor, setValor] = useState('BLANCO');
    const generandoCambios =()=>{
        setValor(preValor=> (preValor === 'BLANCO'? 'MODO  OSCURO' : 'BLANCO'));
    }
    return(
        <TemaContext.Provider value={{valor, generandoCambios}}>
            {children}
        </TemaContext.Provider>
    )
}


export {TemaContext, TemaContextProvider}