import React, { useState } from 'react'
import { AuthLayout } from '../layout/authLayout'
import { Grid, IconButton, Input, Link, TextField, Typography } from '@mui/material'
import { Google } from '@mui/icons-material'
import { Link as linkRouter } from 'react-router-dom'
import { UseForm } from '../../hooks/useForm'
import { useDispatch } from 'react-redux'
import { RegisterWithEmailAndPassword } from '../../store/auth/thunk'

const form = {
    displayName: '',
    email: '',
    password: ''
}
const formValidations = {
    displayName: [(value) => value.length > 0, ' El nombre es obligatorio'],
    email: [(value) => (value.includes('@gmail') || value.includes('@hotmail') || value.includes('@outlook')) && value.includes('.'), 'Ingrese un correo electronico valido'],
    password: [(value) => value.length > 5 && /[A-Z]/.test(value), 'La contraseña debe contener una mayuscula y mas de 5 digitos']
}
export const RegisterPage = () => {
    const dispatch = useDispatch();
    const { OnInputchange, displayName, email, password, isFormValid, formState, displayNameValid, emailValid, passwordValid } = UseForm(form, formValidations);


    const [enviado, setEnviado] = useState(false)
    const submit = (event) => {
        event.preventDefault();
        if (isFormValid) {
            dispatch(RegisterWithEmailAndPassword(email, password, displayName))

        }
        console.log(isFormValid);
    }
    return (
        <AuthLayout title='Registrarse'>
            <form onSubmit={submit}>

                <Grid item xs={12} mt={2} >
                    <TextField
                        fullWidth
                        placeholder='Nombre de usuario'
                        value={displayName}
                        name='displayName'
                        error={displayNameValid !== null && enviado ? true : false}
                        helperText={enviado && displayNameValid ? displayNameValid : ""}
                        onChange={OnInputchange}
                        style={{ fontSize: '24px' }}
                    />
                </Grid>
                <Grid item xs={12} mt={2} >
                    <TextField
                        fullWidth
                        placeholder='email'
                        type='email'
                        value={email}
                        error={emailValid !== null && enviado ? true : false}
                        helperText={emailValid !== null && enviado ? emailValid : ""}
                        name='email'
                        onChange={OnInputchange}
                        style={{ fontSize: '24px' }}
                    />
                </Grid>
                <Grid item xs={12} mt={2}>

                    <TextField
                        fullWidth
                        placeholder='contraseña'
                        type='password'
                        value={password}
                        error={passwordValid !== null && enviado ? true : false}
                        helperText={passwordValid !== null && enviado ? passwordValid : ""}
                        name='password'
                        onChange={OnInputchange}
                        style={{ fontSize: '24px' }}
                    />
                </Grid>
                <Grid container mt={2} color={'black'}>

                    <Grid item xs={12}>
                        <IconButton sx={{ backgroundColor: 'primary.main', borderRadius: '4px', width: '100%' }} type='submit'>
                            <Typography color={'black'} fontSize={'20px'}>Registrar</Typography>
                        </IconButton>
                    </Grid>
                </Grid>
                <Grid container justifyContent={'end'} mt={2}>

                    <Typography>
                        ¿Ya tienes cuenta?
                    </Typography>
                    <Link
                        color={'inherit'}
                        component={linkRouter}
                        to='/auth/login'
                        ml={1}
                    >
                        Iniciar
                    </Link>
                </Grid>

            </form>
        </AuthLayout >
    )
}
