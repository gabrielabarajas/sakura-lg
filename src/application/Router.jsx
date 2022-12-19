import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Reading from "../Pages/Reading"
import Result from '../Pages/Result'

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