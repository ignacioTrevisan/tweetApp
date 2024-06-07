import { createSlice } from '@reduxjs/toolkit';


export const TwSlice = createSlice({
    name: 'Tw',
    initialState: {
        text: '',
        img: [],
        status: 'Loading',
        otherTweets: [],
        tweetsFilter: [],
        trending: [],
        hashtags: [],
    },
    reducers: {
        startLoading: (state) => {
            state.status = 'Loading';
        },
        loadAllTweets: (state, action) => {
            state.otherTweets = action.payload;
            state.tweetsFilter = action.payload;
        },
        loadTrendingsAndHastags: (state, action) => {

            state.hashtags = action.payload.hashtags;
            state.trending = action.payload.trending;
        },
        orderTrendings: (state) => {
            let arrayDeElementos = Object.entries(state.trending);
            arrayDeElementos.sort((a, b) => b[1] - a[1]);
            const objetoOrdenado = Object.fromEntries(arrayDeElementos);
            state.trending = objetoOrdenado
        },
        stopLoading: (state) => {
            state.status = '';
        },
        setImages: (state) => {
            state.status = '';
        },
        filtrarTweets: (state, action) => {

            const tweets = [...action.payload.lista];

            const tweetsFilter = tweets.filter((tw) =>
                tw.tw.toLowerCase().includes(action.payload.busqueda.toLowerCase())
            );

            state.tweetsFilter = [...tweetsFilter]
        }
    }
});


// Action creators are generated for each case reducer function
export const { startLoading, loadAllTweets, loadTrendingsAndHastags, filtrarTweets, orderTrendings, stopLoading, setImages } = TwSlice.actions;