import { createContext } from "react";



export const Context = createContext(null)

  const ThisProvider = ({children})=> {

     return(
         <Context.Provider value={{}}>
             {children}
         </Context.Provider>
     )

  }
  export default ThisProvider