import { createContext } from "react";


const SayayinContext = createContext();

const SayayinContextProvider = ( {children})=>{

    const sayayins= [
            {"nombre":"goku","poder":45},
            {"nombre":"vegeta", "poder":43},
            {"nombre":"gohan","poder":35}
        ];
    return(
        <SayayinContext.Provider value={sayayins}>
            {children}
        </SayayinContext.Provider>
    )


}


export {SayayinContext, SayayinContextProvider}