import { createContext, useState } from 'react';

const MyContext = createContext();

const MyContextProvider = ({ children }) => {
  const [valor, setValor] = useState('valor inicial');

  const cambiarValor = () => {
    setValor('nuevo valor');
  };

  return (
    <MyContext.Provider value={{ valor, cambiarValor }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyContextProvider };
