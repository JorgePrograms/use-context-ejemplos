import { createContext, useState } from "react";

const NumeroContext = createContext();
const NumeroContextProvider = ({children})=>{
    const [valor,setValor] = useState(1);
    const avanzar = ()=>{
        setValor(valor=>valor+1);
    }
    const retroceder =()=>{
        setValor(valor=>valor-1);
    }
    return(
        <NumeroContext.Provider value={{valor,avanzar,retroceder}}>
            {children}
        </NumeroContext.Provider>
    )
}
export {NumeroContext,NumeroContextProvider}