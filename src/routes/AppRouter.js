import { BrowserRouter, Route, Routes } from "react-router-dom"

import { LoginScreen } from "../components/Login/LoginScreen"
import { DashboardRoutes } from "./DashboardRoutes"



export const AppRouter = () => {
  return (
    
    <BrowserRouter>
    
    <Routes>        
        <Route path="/login" element={<LoginScreen/>}  ></Route>
        <Route path="/*" element={<DashboardRoutes/>}></Route>
    </Routes>
    </BrowserRouter>
        
  )
}
