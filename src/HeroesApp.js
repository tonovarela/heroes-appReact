
import { useEffect, useReducer } from "react"
import { AuthContext } from "./components/auth/authContext"
import { authReducer } from "./components/auth/authReduce"
import { AppRouter } from "./routes/AppRouter"

const init =()=>{
  return JSON.parse(localStorage.getItem('usuario')) || {logged:false}

}
export const HeroesApp = () => {
    
  const [user, dispatch] = useReducer(authReducer, {},init)

  useEffect(() => {
    if (!user) return;
    localStorage.setItem('usuario',JSON.stringify(user))      
  }, [user])
  
  return (
   <AuthContext.Provider  value={{user,dispatch}}>
     <AppRouter></AppRouter>
   </AuthContext.Provider>
   
  )
}
