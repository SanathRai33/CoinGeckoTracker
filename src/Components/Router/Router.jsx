import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../../Pages/Home'
import CoinDetail from '../../Pages/CoinDetail'
import Layout from '../../Pages/Layout'

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />} >
                <Route index element={<Home />} />
                <Route path="/details/:coinId" element={<CoinDetail />} />
            </Route>
        </Routes>
    )
}

export default Router
