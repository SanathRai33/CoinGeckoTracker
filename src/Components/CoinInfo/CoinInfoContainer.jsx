import React, { useState, useContext } from 'react'
import CoinInfo from './CoinInfo'
import { CurrencyContext } from '../../Context/CurrencyContext';
import fetchCoinHistoryData from '../../Services/fetchCoinHistoryData';
import PageLoader from '../PageLoader/PageLoader';
import Alert from '../Alert/Alert';
import { useQuery } from '@tanstack/react-query';

const CoinInfoContainer = ({ coinId }) => {

  const { currency } = useContext(CurrencyContext);

  const [days, setDays] = useState(7);
  const [interval, setCoinInterval] = useState('');

  const { data: historicData, isLoading, isError, error } = useQuery({
    queryKey: ['coinHistoricData', coinId, days, interval, currency],
    queryFn: () => fetchCoinHistoryData(coinId, interval, days, currency),
    cacheTime: 1000 * 60 * 2,
    staleTime: 1000 * 60 * 2,
  });

  if (isLoading) return <PageLoader />;
  if (isError) return <Alert message="Error" type="error" />;


  return (
    <div className='w-full h-full'>
      <CoinInfo
        historicData={historicData}
        setCoinInterval={setCoinInterval}
        setDays={setDays}
        days={days}
        currency={currency}
      />
    </div>
  )
}

export default CoinInfoContainer
