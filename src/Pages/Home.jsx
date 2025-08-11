import React from 'react'
import Navbar from "../Components/Navbar/Navbar";
import CoinTable from "../Components/CoinTable/CoinTable";
import Banner from "../Components/Banner/Banner";

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full max-w-full min-w-full mx-auto">
            <Navbar />
            <Banner />
            <CoinTable />
        </div>
    )
}

export default Home
