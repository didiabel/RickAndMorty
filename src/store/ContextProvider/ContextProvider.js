import { createContext, useState } from "react";

export const Context = createContext(null);

const ThisProvider = ({ children }) => {
  const [search, setSearch] = useState("");

  
  return (
    <Context.Provider value={{ search, setSearch }}>
      {children}
    </Context.Provider>
  );
};
export default ThisProvider;
