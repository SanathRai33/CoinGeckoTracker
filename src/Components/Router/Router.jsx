import React, { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '../../Pages/Layout'
import PageLoader from '../PageLoader/PageLoader';
import { CustomErrorBoudary } from '../CustomError/CustomError';

const Home = lazy(() => import('../../Pages/Home'));
const CoinDetail = lazy(() => import('../../Pages/CoinDetail'));

const Router = () => {
    return (
        <CustomErrorBoudary>
            <Routes>
                <Route path="/" element={<Layout />} >
                    <Route index element={
                        <Suspense fallback={<div>Loading...</div>}>
                            <Home />
                        </Suspense>
                    } />
                    <Route path="/details/:coinId" element={
                        <Suspense fallback={<PageLoader />}>
                            <CoinDetail />
                        </Suspense>
                    } />
                </Route>
            </Routes>
        </CustomErrorBoudary>
    )
}

export default Router
