import React from 'react'
import { useParams } from 'react-router-dom';

const CoinDetail = () => {

    const { coinId } = useParams();

  return (
    <div>
      Coin Detail Page of {coinId}
    </div>
  )
}

export default CoinDetail
