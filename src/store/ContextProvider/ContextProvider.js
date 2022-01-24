import { createContext, useState } from "react";
import { GetApi } from "../../GlobalHooks/HTTP";

export const Context = createContext(null);

const ThisProvider = ({ children }) => {
  return <Context.Provider value={{}}>{children}</Context.Provider>;
};
export default ThisProvider;
