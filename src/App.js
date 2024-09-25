
import './App.css';
import Boton from './botones-adelante-atras/Boton';
import { NumeroContextProvider } from './botones-adelante-atras/NumeroContext';
import ContainerTema from './cambiar-tema/ContainerTema';
import ContainerSayayin from './lista-sayayin/ContainerSayayin';


import MiComponente from './cambiar-valor/MiComponente';
import {  MyContextProvider} from './cambiar-valor/MyContext';


function App() {
  return (
    <div>
<NumeroContextProvider>
    <Boton />
  </NumeroContextProvider>
  <MyContextProvider>
  <MiComponente />
  </MyContextProvider>
<ContainerTema />
<ContainerSayayin />
    </div>
    
  )
}

export default App;
