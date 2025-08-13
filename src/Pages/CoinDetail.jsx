import { useParams } from 'react-router-dom';
import parse from 'html-react-parser';
import PageLoader from '../Components/PageLoader/PageLoader';
import CoinInfoContainer from '../Components/CoinInfo/CoinInfoContainer';
import useFetchCoin from '../hooks/useFetchCoin';

const CoinDetail = () => {

    const { coinId } = useParams();
    
    // Custom hook
    const { currency, isError, isLoading, error, coin } = useFetchCoin(coinId)

    if (isLoading) return <PageLoader />;
    if (isError) return <div>Error: {error.message}</div>;

    return (
        <div className='flex justify-center w-full max-w-full min-w-full'>
            <div className='flex flex-col items-center justify-center basis-[30%] border-r-2 border-amber-100 p-5 gap-5'>
                <img src={coin?.image?.large} alt={coin?.name} className='mb-4' />
                <h1 className='mb-4 text-3xl font-bold'>
                    {coin?.name} ({coin?.symbol?.toUpperCase()})
                </h1>
                <p className='mb-2 text-lg text-justify'>
                    Description: {parse(coin?.description?.en || '')}
                </p>
                <div className='flex justify-between w-full'>
                    <div className='flex gap-3 mb-2 text-lg font-extrabold'>
                        <p>Rank:</p>
                        <p className='text-green-800'>{coin?.market_cap_rank}</p>
                    </div>
                    <div className='flex gap-3 mb-2 text-lg font-extrabold'>
                        <p>Current Price:</p>
                        <p className='text-yellow-400 '>{currency === 'usd' ? '$' : '₹'} {coin?.market_data?.current_price[currency]?.toLocaleString()}</p>
                    </div>
                </div>
            </div>
            <div className='basis-[70%] min-h-100 mt-7 h-full flex justify-center items-start text-white'>
                <CoinInfoContainer coinId={coinId}/>
            </div>
        </div>
    );
};

export default CoinDetail;
