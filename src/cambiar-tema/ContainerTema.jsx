import Boton2 from "./Boton2";
import { TemaContextProvider } from "./TemaContext"

const ContainerTema=()=>{
return(
   <TemaContextProvider>
        <Boton2 />
   </TemaContextProvider>
)
}

export default ContainerTema;