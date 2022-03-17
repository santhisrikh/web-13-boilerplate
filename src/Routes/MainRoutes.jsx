import React from "react"
import { Route, Router, Routes } from "react-router"
import { About } from "../components/About"
import { Home } from "../components/Home"
import { MoviesDashboard } from "../components/MoviesDashboard"

export const MainRoutes = ()=>{
    return(
        <>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/about" element={<About/>}></Route>
                <Route path="/movies" element={<MoviesDashboard/>}></Route>
            </Routes>
        </>
    )
}