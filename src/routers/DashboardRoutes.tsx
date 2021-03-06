import { Navbar } from "../components/ui/Navbar"
import { Route, Routes } from "react-router-dom"
import { MarvelScreen } from "../components/marvel/MarvelScreen"
import { DcScreen } from "../components/dc/DcScreen"
import { SearchScreen } from "../components/search/SearchScreen"
import { NotFound } from "../NotFound"
import { HeroScreen } from "../components/hero/HeroScreen"

export const DashboardRoutes = () => {
  return(
    <>
      <Navbar/>

      <div className="container">
        <Routes>
          <Route path="marvel" element={<MarvelScreen/>}/>
          <Route path="dc" element={<DcScreen/>}/>
          <Route path="search" element={<SearchScreen/>}/>
          <Route path="hero" element={<HeroScreen/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </div>
    </>
  )
}
