import { useContext } from "react"
import { SayayinContext} from './SayayinContext'


const ListaSayayin=()=>{
    const sayayins =useContext(SayayinContext);

    return(
        <div>
            <h2>Lista Sayayin</h2>
            <ul>
                {sayayins.map(sayayin=>(
                    <li key={sayayin.nombre}>
                        {sayayin.nombre} - Poder: {sayayin.poder}
                        </li>
                ))}
            </ul>
        </div>
    )
}

export default ListaSayayin;