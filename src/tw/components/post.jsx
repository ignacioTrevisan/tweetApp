import { Grid, TextField, Typography, DialogContent, Dialog } from '@mui/material';
import React, { useState } from 'react'



export const Post = ({ post }) => {
    const [imageEnabled, setImageEnabled] = useState({
        imagenes: [],
        activo: false,
        valor: 0,
    });

    const handleClose = () => {
        setImageEnabled({
            ...imageEnabled,
            activo: false,
        });
    };

    return (
        <>



            <Grid container mt={4} paddingBottom={2} paddingTop={10} justifyContent={'center'} mb={3} className='animate__animated animate__fadeIn'>
                {post.map((p, index) => {
                    let variable = p.photoURL.length == 2
                        ? { imagen: 6, texto: 30 } //2 fotos
                        : p.photoURL.length == 1
                            ? { imagen: 9, texto: 42 }  //una foto
                            : { imagen: 11, texto: 50, height: 8 } //sin fotos
                    return (
                        <Grid item xs={11} key={index} mt={2} sx={{ backgroundColor: 'primary.main', borderRadius: '5px', height: { sm: `${variable.heigth}rem`, md: '8rem' } }}>
                            <div className='post '>
                                <Grid container ml={2}>
                                    <Grid item xs={12}>
                                        <Typography variant="h6" sx={{ color: 'error.main' }}>{p.displayName}</Typography>
                                    </Grid>
                                    <Grid item lg={variable.imagen} md={variable.imagen - 2} sm={10} xs={variable.imagen}>
                                        <TextField
                                            value={p.tw}
                                            multiline
                                            fullWidth
                                            variant="outlined"
                                            sx={{
                                                backgroundColor: 'text.main',
                                                '& .MuiOutlinedInput-root': {
                                                    height: '70px',
                                                    display: 'flex',
                                                    alignItems: 'flex-start',
                                                    overflow: 'auto'
                                                },
                                                '& .MuiInputBase-root': {
                                                    padding: '8px',
                                                    boxSizing: 'border-box',
                                                }
                                            }}
                                            InputProps={{
                                                style: { fontSize: '0.8rem' }
                                            }}
                                        />
                                    </Grid>

                                    {p.photoURL && (
                                        <Grid item sx={{ marginLeft: { sm: '0px', md: '10px' } }}>
                                            <Grid container justifyContent={'center'}>
                                                {p.photoURL.map((img, imgIndex) => {
                                                    const imgVariable = p.photoURL.length > 1 ? 6 : 12;
                                                    return (
                                                        <Grid item xs={imgVariable} height={'70px'} key={imgIndex}>
                                                            <Grid container justifyContent={'center'} alignItems={'center'}>
                                                                <img
                                                                    src={img}
                                                                    style={{
                                                                        maxWidth: '100%',
                                                                        maxHeight: '70px',
                                                                        width: 'auto',
                                                                        height: 'auto',
                                                                        cursor: 'pointer'
                                                                    }}
                                                                    alt="post image"
                                                                    onClick={() => setImageEnabled({ imagenes: p.photoURL, activo: true, valor: imgIndex })}

                                                                />
                                                            </Grid>
                                                        </Grid>
                                                    );
                                                })}
                                            </Grid>
                                        </Grid>
                                    )}
                                    <Grid container alignItems={'center'}>

                                        <Grid item justifyContent={'end'} sx={{ ml: { sm: '140px', md: variable.texto - 24, lg: variable.texto } }}>
                                            <Typography sx={{ textDecoration: 'underline', fontStyle: 'italic' }}>Responder...</Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </div>
                        </Grid>
                    );
                })}
            </Grid>


            <Dialog open={imageEnabled.activo} onClose={handleClose}>
                <DialogContent>
                    {imageEnabled.imagenes && (
                        <img src={imageEnabled.imagenes[imageEnabled.valor]}
                            alt="Imagen ampliada"
                            style={{ width: '100%', height: 'auto' }} />
                    )}
                </DialogContent>
            </Dialog>

        </>
    );
};
