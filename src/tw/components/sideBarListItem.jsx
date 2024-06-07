import { TurnedInNot } from '@mui/icons-material'
import { Box, Grid, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import { SideBarItem } from './sideBarItem';
import { useDispatch, useSelector } from 'react-redux';
import { filtrarTweets } from '../../store/tw/twSlice';

export const SideBarListItem = ({ hash, tws, Display, setDisplay }) => {

    const entrie = Object.entries(hash);
    const entries = entrie.slice(0, 3)
    console.log(entries);
    const entriestws = Object.entries(tws.slice(0, 3));
    const newTitle = (title) => {
        return title.length > 17
            ? title.substring(0, 17) + '...'
            : title
    }
    const newComentCount = (count, title) => {
        const all = (count + title + ' Comentarios').length;
        console.log(all, title)
        return all > 19
            ? (count + ' Comentarios').substring(0, (19 - title.length)) + '...'
            : count + ' Comentarios'
    }
    const dispatch = useDispatch();
    const { otherTweets } = useSelector(state => state.tw);
    const handleOptionSelect = (valor) => {
        dispatch(filtrarTweets({ lista: otherTweets, busqueda: valor }));
        setDisplay(false);
    }

    return (
        entries.map((title, counter) => (


            <List sx={{ height: '100%' }} key={`list-${counter}`}>
                <IconButton sx={{ borderRadius: '0px' }} onClick={() => handleOptionSelect(title[0])}>


                    <Grid container sx={{ alignItems: 'center', backgroundColor: 'primary.main' }} key={`grid-${counter}`}>
                        <Grid mr={1} key={`grid-item-${counter}`}>


                            <ListItemText
                                primary={newTitle(title[0])}
                                primaryTypographyProps={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'black' }}
                            />

                        </Grid>


                        <ListItemText
                            primary={newComentCount(title[1], title[0])}
                            primaryTypographyProps={{ fontSize: '1.9rem' }}
                        />

                        {
                            (() => {
                                let displayedCount = 0;
                                return entriestws.map((t, index) => {
                                    if (displayedCount < 3 && t[1].tw.includes(title[0])) {
                                        displayedCount++;
                                        return <SideBarItem tweet={t} key={`sidebaritem-${index}-${counter}`} />;
                                    } else {
                                        return null;
                                    }
                                });
                            })()
                        }
                    </Grid>
                </IconButton>
            </List>


        ))
    );

}

