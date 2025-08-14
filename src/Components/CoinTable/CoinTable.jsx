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
      <div className="w-full lg:w-[80vw] sm:w-full flex flex-col justify-between items-center border-4 border-black bg-amber-200 text-black">
        <div className='flex w-full p-0 border-b-4 border-black lg:gap-4 lg:px-4 sm:p-0'>
          <div className='basis-[30%] border-r-4 border-black p-2 font-bold text-center'>
            Coin
          </div>
          <div className='basis-[17%] lg:basis-[20%] sm:basis-[17%] border-r-4 border-black p-2 font-bold text-center' >
            Price
          </div>
          <div className='lg:basis-[25%] sm:basis-[18%] basis-[18%] border-r-4 border-black sm:p-0 p-0 lg:p-2 font-bold text-center' >
            Change (24h)
          </div>
          <div className='lg:basis-[25%] basis-[35%] sm:basis-[35%] py-2 w-full px-0 sm:py-2 sm:px-0 lg:p-2 font-bold text-center '>
            Market Cap
          </div>
        </div>
        <div className="flex flex-col w-full max-w-full min-w-full">
          {isLoading && <div>Loading...</div>}
          {data.map((coin) => (
            <div key={coin.id} onClick={() => handleRedirect(coin.id)} className="flex p-0 border-b-2 border-black cursor-pointer lg:gap-4 lg:px-4 sm:p-0">
              <div className="flex-col flex lg:flex-row sm:flex-col justify-center lg:justify-start w-full items-center basis-[30%] border-r-4 border-black p-1">
                <img src={coin.image} alt={coin.name} className="m-0 lg:mr-3 w-9 h-9 lg:w-13 sm:w-9 sm:h-9 lg:h-13" loading="lazy" />
                <div className="flex flex-col">
                  <span className="text-lg font-bold lg:text-2xl sm:text-lg">{coin.name}</span>
                  <span className="text-sm text-gray-500">({coin.symbol.toUpperCase()})</span>
                </div>
              </div>
              <div className=' lg:basis-[20%] sm:basis-[17%] basis-[17%] border-r-4 border-black lg:p-2 sm:p-0 p-0'>
                {currency === 'usd' ? '$' : '₹'} {coin.current_price.toLocaleString()}
              </div>
              <div className={`${coin.price_change_percentage_24h > 0 ? 'text-green-500' : 'text-red-500'} lg:basis-[25%] sm:basis-[18%] basis-[18%] border-r-4 text-center border-black p-0 py-2 sm:px-2 lg:p-2`}>
                {coin.price_change_percentage_24h.toFixed(2)}%
              </div>
              <div className='lg:basis-[25%] basis-[35%] sm:basis-[35%]  text-center'> {currency === 'usd' ? '$' : '₹'} {coin.market_cap.toLocaleString()}</div>
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
