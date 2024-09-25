import { useContext } from 'react';
import { MyContext } from './MyContext';

const MiComponente = () => {
  const { valor, cambiarValor } = useContext(MyContext);

  return (
    <div>
      <h2>Cambiar valor:</h2>
      <button onClick={cambiarValor}>cambiarValor</button>
      <p>Valor del texto: {valor}</p>
    </div>
  );
};
export default MiComponente;