
import { Button, Grid, IconButton, Input, Link, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { AuthLayout } from '../layout/authLayout'
import { Google, Password } from '@mui/icons-material'
import { Link as linkRouter } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logInWithEmailAndPassword, signWithGoogle } from '../../store/auth/thunk'
import { UseForm } from '../../hooks/useForm'
const formstate = {
    email: '',
    password: '',
}
const formValidations = {
    email: [(value) => (value.includes('@gmail') || value.includes('@hotmail') || value.includes('@outlook')) && value.includes('.'), 'Ingrese un correo electronico valido'],
    password: [(value) => value.length > 5 && /[A-Z]/.test(value), 'La contraseña debe contener una mayuscula y mas de 5 digitos']
}
export const LoginPage = () => {
    const dispatch = useDispatch();
    const signInWithGoogle = () => {
        dispatch(signWithGoogle())
    }
    const { email, password, emailValid, passwordValid, isFormValid, OnInputchange } = UseForm(formstate, formValidations);
    const [subido, setsubido] = useState(false);
    const onFormSubmit = (event) => {
        event.preventDefault();
        setsubido(true);
        if (isFormValid) {
            dispatch(logInWithEmailAndPassword(email, password))
        }
    }
    return (
        <>
            <AuthLayout title='Inicio de sesión'>
                <form onSubmit={onFormSubmit}>

                    <Grid item xs={12} >
                        <TextField
                            fullWidth
                            placeholder='email'
                            type='email'
                            name='email'
                            value={email}
                            onChange={OnInputchange}
                            error={emailValid !== null && subido ? true : false}
                            helperText={emailValid !== null && subido ? emailValid : ''}
                            style={{ fontSize: '24px' }}
                        />
                    </Grid>
                    <Grid item xs={12} mt={2}>

                        <TextField
                            fullWidth
                            placeholder='contraseña'
                            type='password'
                            name='password'
                            value={password}
                            onChange={OnInputchange}
                            error={passwordValid !== null && subido ? true : false}
                            helperText={passwordValid !== null && subido ? passwordValid : ''}
                            style={{ fontSize: '24px' }}
                        />
                    </Grid>
                    <Grid container mt={2} color={'black'}>
                        <Grid item xs={6}>
                            <Grid container justifyContent={'center'}>
                                <IconButton sx={{ backgroundColor: 'primary.main', borderRadius: '4px', width: '95%' }} type='submit'>
                                    <Typography color={'black'} fontSize={'20px'}>Iniciar</Typography>
                                </IconButton>
                            </Grid>
                        </Grid>
                        <Grid item xs={6}  >
                            <IconButton onClick={signInWithGoogle} sx={{ backgroundColor: 'primary.main', borderRadius: '4px', width: '95%' }}>
                                <Google sx={{ marginRight: '2px' }} />
                                <Typography color={'black'} fontSize={'20px'}>Google</Typography>
                            </IconButton>
                        </Grid>
                    </Grid>
                    <Grid container justifyContent={'end'} mt={2}>

                        <Typography>
                            ¿No tienes cuenta?
                        </Typography>
                        <Link
                            color={'inherit'}
                            component={linkRouter}
                            to='/auth/register'
                            ml={1}
                        >
                            Registrar
                        </Link>
                    </Grid>

                </form>
            </AuthLayout >
        </>
    )
}
