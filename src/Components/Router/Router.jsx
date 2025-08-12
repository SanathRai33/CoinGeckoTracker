import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../../Pages/Home'
import CoinDetail from '../../Pages/CoinDetail'

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details/:coinId" element={<CoinDetail />} />
        </Routes>
    )
}

export default Router
