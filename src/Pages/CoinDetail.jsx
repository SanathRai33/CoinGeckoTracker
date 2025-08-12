import React, { use } from 'react'
import { useParams } from 'react-router-dom';
import fetchCoinDetail from '../Services/fetchCoinDetail';
import { useQuery } from '@tanstack/react-query';
import { parse } from 'html-parser';

const CoinDetail = () => {

    const { coinId } = useParams();

    const { data: coin, isLoading, isError, error } = useQuery({
        queryKey: ['coin', coinId],
        queryFn: () => fetchCoinDetail(coinId),
        cacheTime: 1000 * 60 * 2,
        staleTime: 1000 * 60 * 2,
    });

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error: {error.message}</div>;

    console.log(coin)

    return (
        <div className='flex items-center justify-center w-full max-w-full min-w-full'>
            <div className='flex flex-col items-center justify-center basis-[30%] border-r-2 border-amber-100 p-5 gap-5' >
                <div>
                    <img src={coin?.image.large} alt={coin?.name} className='mb-4' />
                </div>
                <div>
                    <h1 className='mb-4 text-3xl font-bold'>{coin?.name} ({coin?.symbol.toUpperCase()})</h1>
                </div>
                <div>
                    <p className='mb-2 text-lg'>Description: {coin?.description.en}</p>
                </div>
                <div className='flex justify-between w-full'>
                    <p className='mb-2 text-lg font-extrabold'>Rank: {coin?.market_cap_rank}</p>
                    <p className='mb-2 text-lg font-extrabold text-yellow-400'>Current Price: {coin?.market_coin?.current_price.usd.toLocaleString()} USD</p>
                </div>
            </div>
            <div className='basis-[70%] items-center justify-center'>
                <h1>Coin information</h1>1
            </div>
        </div>
    )
}

export default CoinDetail
