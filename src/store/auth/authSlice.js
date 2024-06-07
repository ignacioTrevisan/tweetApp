import { createSlice } from '@reduxjs/toolkit';

export const AuthSlice = createSlice({
    name: 'Auth',
    initialState: {
        displayName: '',
        photoURL: '',
        status: 'Checking',
        uid: '',
        errorMessage: '',
        email: ''
    },
    reducers: {
        logIn: (state, action) => {
            console.log(action)
            state.displayName = action.payload.displayName;
            state.photoURL = action.payload.photoURL;
            state.status = 'logged';
            state.uid = action.payload.uid;
            state.errorMessage = action.payload.errorMessage || '';
            state.email = action.payload.email;
        },
        logOut: (state, action) => {
            state.displayName = ''
            state.photoURL = ''
            state.status = 'unlogged'
            state.uid = ''
            state.errorMessage = action.payload || '';
            state.email = ''
        },
        setChecking: (state) => {
            state.displayName = null;
            state.photoURL = null;
            state.status = 'Checking';
            state.uid = null;
            state.errorMessage = null;
            state.email = null;
        }
    }
});


export const { logIn, logOut, setChecking } = AuthSlice.actions;