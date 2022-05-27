import { BrowserRouter, Route, Routes } from "react-router-dom"
import { LoginScreen } from "../components/login/LoginScreen"
import { NotFound } from "../NotFound"
import { DashboardRoutes } from "./DashboardRoutes"


export const AppRouter = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginScreen/>}/>

        <Route path="/*" element={<DashboardRoutes/>}/>

        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}
