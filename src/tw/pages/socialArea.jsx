import { Button, Grid, IconButton, Input, TextField, Typography } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'

import { UseForm } from '../../hooks/useForm'
import { Post } from '../components/post'
import { useDispatch, useSelector } from 'react-redux'
import { startLoadTweet } from '../../store/tw/thunk'

const formData = {
    tw: ''
}
export const SocialArea = () => {
    const [Imagenes, setImagenes] = useState([])
    const { tw, OnInputchange } = UseForm(formData);
    const dispatch = useDispatch();
    const { uid, displayName } = useSelector(state => state.authSlice)
    const submit = (event) => {
        event.preventDefault();
        dispatch(startLoadTweet(uid, displayName, tw, Imagenes));
    }
    const [error, seterror] = useState('')
    const fileInputRef = useRef();
    const onFileInputChange = ({ target }) => {
        if (target.files.length === 0) return;
        if (target.files.length > 2) {
            seterror('Solo se puede un maximo de 2 archivos por publicación')
        } else {

            setImagenes(target.files);
        }
    }




    const { tweetsFilter } = useSelector(state => state.tw)
    const [ParaEfecto, setParaEfecto] = useState(false);
    //esto sive para ocultar y mostrar los post al momento de cambiar los tweets
    // de manera que se redibujen y se reenvie el efecto fadeIn
    useEffect(() => {
        setParaEfecto(false)
    }, [tweetsFilter])
    useEffect(() => {
        if (ParaEfecto === false)
            setParaEfecto(!ParaEfecto)


    }, [ParaEfecto])

    return (
        <Grid container sx={{ backgroundColor: 'text.main' }} ml={{ lg: '480px', md: '400px', sm: '320px' }} width={{ lg: `calc(100% - 480px)`, md: `calc(100% - 400px)`, sm: `calc(100% - 320px)` }} mt={3} justifyContent={'center'}>
            <input
                type={'file'}
                ref={fileInputRef}
                multiple
                onChange={onFileInputChange}
                style={{ display: 'none' }}
            />
            <form onSubmit={submit}>
                <Grid item sx={{ backgroundColor: 'secondary.main', width: { xl: '900px', lg: '650px', md: '470px', sm: '300px' } }} >


                    <Typography sx={{ position: 'absolute', marginLeft: '35px' }}>Haz una publicación...</Typography>

                    <Grid container justifyContent={'center'}>


                        <Grid item xs={11} mt={4}>
                            <TextField
                                multiline
                                rows={2}
                                name={'tw'}
                                value={tw}
                                onChange={OnInputchange}
                                variant="outlined"
                                fullWidth
                                sx={{
                                    backgroundColor: 'text.main',
                                    height: '100px',
                                    '& .MuiOutlinedInput-root': {
                                        height: '100%',
                                        overflow: 'auto'
                                    }
                                }}
                            />
                        </Grid>
                        <Grid item xs={11} mt={2} mb={1}>
                            <Grid container>
                                <Grid item xs={6}>
                                    <Grid container>
                                        <Grid item xs={3}>
                                            <Grid container justifyContent={'start'}>
                                                <IconButton onClick={() => fileInputRef.current.click()}>
                                                    <Typography sx={{ textDecoration: 'underline', fontStyle: 'italic' }}> Adjuntar...</Typography>
                                                </IconButton>
                                            </Grid>
                                        </Grid>
                                        <Grid item xs={5} mt={1}>


                                            <Grid container justifyContent={'space-between'}>

                                                {Array.from(Imagenes).length > 0 &&
                                                    Array.from(Imagenes).map((img, index) => (
                                                        <Grid item xs={5}>
                                                            <IconButton key={index} >
                                                                <Typography sx={{ textDecoration: 'underline', fontStyle: 'italic', fontSize: '0.8rem' }}>{img.name}</Typography>
                                                            </IconButton>
                                                        </Grid>
                                                    ))
                                                }

                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={6}>
                                    <Grid container justifyContent={'end'}>
                                        <Button sx={{ backgroundColor: 'primary.main', color: 'white' }} type='submit'>
                                            Publicar
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                            {error && <Typography color="error">{error}</Typography>} {/* Display error message */}
                        </Grid>

                    </Grid>


                </Grid >
                <Grid display={ParaEfecto !== true ? 'none' : ''} item sx={{ backgroundColor: 'secondary.main', width: { xl: '900px', lg: '650px', md: '470px', sm: '300px' } }} >
                    <Post post={tweetsFilter} />
                </Grid>
            </form>
        </Grid>

    )
}
