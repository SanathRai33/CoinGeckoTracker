import React, { useContext } from 'react';
import { CurrencyContext } from "../Context/CurrencyContext";
import { useQuery } from "@tanstack/react-query";
import fetchCoinDetail from "../Services/fetchCoinDetail";

// Custom hook
function useFetchCoin (coinId){
    
    const { currency } = useContext(CurrencyContext);

    const { data: coin, isLoading, isError, error } = useQuery({
        queryKey: ['coin', coinId, currency],
        queryFn: () => fetchCoinDetail(coinId, currency),
        cacheTime: 1000 * 60 * 2,
        staleTime: 1000 * 60 * 2,
    });

    return{
        currency,
        isError,
        isLoading,
        error,
        coin
    }
}

export default useFetchCoin;