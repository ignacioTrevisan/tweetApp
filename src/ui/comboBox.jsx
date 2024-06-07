import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useDispatch, useSelector } from 'react-redux';
import { filtrarTweets } from '../store/tw/twSlice';


export default function ComboBox() {
    const { trending } = useSelector(state => state.tw);
    const entries = Object.entries(trending);

    const lista = [];
    for (const has of entries) {
        lista.push(has[0]);
    }

    const dispatch = useDispatch();
    const { otherTweets } = useSelector(state => state.tw);

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            dispatch(filtrarTweets({ lista: otherTweets, busqueda: event.target.value }));
        }
    }

    const handleOptionSelect = (event, value) => {
        if (value) {
            dispatch(filtrarTweets({ lista: otherTweets, busqueda: value }));
        }
    }

    return (
        <Autocomplete
            disablePortal
            options={lista}
            onChange={handleOptionSelect}
            renderInput={(params) => (
                <TextField
                    {...params}
                    onKeyPress={handleKeyPress}
                    label="Hashtags"
                />
            )}
        />
    );
}



