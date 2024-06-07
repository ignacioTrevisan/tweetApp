import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { startLoadAllTweets } from '../store/tw/thunk';

export const LoadTrendingsAndTweets = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(startLoadAllTweets());
    }, []);
}
