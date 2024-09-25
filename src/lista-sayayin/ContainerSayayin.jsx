import { SayayinContextProvider } from "./SayayinContext";
import ListaSayayin from "./ListaSayayin"

const ContainerSayayin = ()=>{


    return(
    <SayayinContextProvider>
        <ListaSayayin />
    </SayayinContextProvider>
       
    )
}

export default ContainerSayayin;