import { Box, Autocomplete, Grid, Button, TextField,Typography } from "@mui/material";
import { display } from "@mui/system";
import * as React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { GlobalButton } from "../../../components";


type FormData = {
    fullName: string;
    email: string;
    text: string;
}

export default function ContactForm() {
  const navegacion = () => {
		console.log('probando boton');
	};


     const {register, handleSubmit,formState:{errors}} = useForm<FormData>();

     //Para probar si funcionan los formularios
     const formSubmitHandler: SubmitHandler<FormData> = (data: FormData) =>{
      console.log('form data is',data);
     }
    
    return (
      <Box sx={{ width: '500px' }}>
        <form onSubmit={handleSubmit(formSubmitHandler)}>
          <Grid container spacing={5} >
              <Grid item xs={12}>
                <Typography variant='h4' component='h4' color='text.secondary'>
                  Iniciar Sesión
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <TextField 
                      {...register('fullName', {
                        required: 'Este campo es requerido',
                      })}
                      error={!!errors.fullName}
                      helperText={errors.fullName?.message}
                      type='fullName'
                      label='Nombre Completo'
                      variant='outlined'
                      color='text'
                      fullWidth
                      autoComplete='off'
                    />
              </Grid>

              <Grid item xs={12}>
                <TextField 
                    {...register('email', {
                      required: 'Este campo es requerido',
                    })}
                    error={!!errors.email}
                    helperText={errors.email?.message}
                    type='email'
                    label='Correo'
                    variant='outlined'
                    color='text'
                    fullWidth
                  />
              </Grid>
                  
              <Grid item xs={12}>
                <textarea placeholder='Escribe aquí tu comentario'
                      {
                        ...register('email', {
                          required: 'Este campo es requerido'
                        })}
                        
                          autoComplete= 'off'
                          style={{
                            width: '475px',
                            height: '150px',
                            resize: 'none',
                            marginBottom: '30px',
                            fontWeight: '400',
                            fontSize: '16px',
                            lineHeight: '22px',
                            padding: '20px',
                            borderRadius: '5px',
                            border: '1px solid #A9A8A8',
                          }} />
                </Grid>

                <Grid item xs={12} style={{display:'flex', justifyContent:'center'}}>
                   <GlobalButton text='Conoce Más' navegacion={navegacion}/>
                </Grid>
          </Grid>
        </form>
     </Box>
    );
}


