import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "../pages/Home"
import Reading from '../pages/Reading'
import Result from '../pages/Result'

function Router() {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/Reading" element={<Reading/>} />
                <Route path="/Result" element={<Result/>} />
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default Router