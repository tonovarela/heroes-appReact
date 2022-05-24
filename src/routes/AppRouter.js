import { BrowserRouter, Route, Routes } from "react-router-dom"

import { LoginScreen } from "../components/Login/LoginScreen"
import { DashboardRoutes } from "./DashboardRoutes"
import { PrivateRoute } from "./PrivateRoute"

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginScreen />}  ></Route>
        <Route path="/*"
          element={<PrivateRoute>
            <DashboardRoutes />
          </PrivateRoute>}></Route>
      </Routes>
    </BrowserRouter>

  )
}
