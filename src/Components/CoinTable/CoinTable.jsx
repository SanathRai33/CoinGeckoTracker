import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import fetchCoinData from '../../Services/fetchCoinData';
import { useQuery } from '@tanstack/react-query';
import { CurrencyContext } from '../../Context/CurrencyContext';
import PageLoader from '../PageLoader/PageLoader';

const CoinTable = () => {

  const navigate = useNavigate();
  const { currency } = useContext(CurrencyContext)
  const [page, setPage] = useState(1);

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['coins', page, currency],
    queryFn: () => fetchCoinData(page, currency),
    cacheTime: 1000 * 60 * 2,
    staleTime: 1000 * 60 * 2,
  });

  if (isLoading) return <PageLoader />;
  if (isError) return <div>Error: {error.message}</div>;

  const handleRedirect = (id) => {
    navigate(`/details/${id}`);
  }

  return (
    <div className='flex flex-col items-center justify-center w-full max-w-full min-w-full py-10 mx-auto'>
      <div className="w-[80vw] flex flex-col justify-between items-center border-4 border-black bg-amber-200 text-black">
        <div className='flex w-full gap-4 px-4 border-b-4 border-black'>
          <div className='basis-[30%] border-r-4 border-black p-2 font-bold text-center'>
            Coin
          </div>
          <div className='basis-[20%] border-r-4 border-black p-2 font-bold text-center' >
            Price
          </div>
          <div className='basis-[25%] border-r-4 border-black p-2 font-bold text-center' >
            Change (24h)
          </div>
          <div className='basis-[25%] p-2 font-bold text-center'>
            Market Cap
          </div>
        </div>
        <div className="flex flex-col w-full max-w-full min-w-full">
          { isLoading && <div>Loading...</div> }
          {data.map((coin) => (
            <div key={coin.id} onClick={()=> handleRedirect(coin.id)} className="flex gap-4 px-4 border-b-2 border-black cursor-pointer">
              <div className="flex items-center basis-[30%] border-r-4 border-black p-2">
                <img src={coin.image} alt={coin.name} className="mr-2 w-15 h-15" />
                <div className="flex flex-col">
                  <span className="text-2xl font-bold">{coin.name}</span>
                  <span className="ml-1 text-lg text-gray-500">({coin.symbol.toUpperCase()})</span>
                </div>
              </div>
              <div className=' basis-[20%] border-r-4 border-black p-2'> {currency==='usd'? '$' : '₹' } {coin.current_price.toLocaleString()}</div>
              <div className={`${coin.price_change_percentage_24h > 0 ? 'text-green-500' : 'text-red-500'} basis-[25%] border-r-4 border-black p-2`}>
                {coin.price_change_percentage_24h.toFixed(2)}%
              </div>
              <div className=' basis-[25%]'> {currency==='usd'? '$' : '₹' } {coin.market_cap.toLocaleString()}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between w-[80vw] mt-4">
        <button
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
          className="px-4 py-2 text-white bg-blue-500 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span className="text-lg">Page {page}</span>
        <button
          onClick={() => setPage(page + 1)}
          className="px-4 py-2 text-white bg-blue-500 rounded"
        >
          Next
        </button>
        </div>
    </div>
  );
};

export default CoinTable;
