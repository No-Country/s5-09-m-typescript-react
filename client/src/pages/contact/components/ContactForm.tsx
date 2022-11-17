import { Grid, TextField,Typography } from "@mui/material";
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
        <form onSubmit={handleSubmit(formSubmitHandler)}>
          <Grid container spacing={5} >
                <Grid item xs={12}>
                  <Typography variant='h4' component='h4' color='text.secondary'>
                    Contacto
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
                  <TextField 
                              {...register('text', {
                                required: 'Este campo es requerido',
                              })}
                              error={!!errors.text}
                              helperText={errors.text?.message}
                              type='text'
							  placeholder="Escribe aqui tu comentario"
                              label='Comentario'
                              color='text'
                              fullWidth
                              multiline
							  rows={5}
                            />
                  </Grid>
  

                          <Grid item xs={12} style={{display:'flex', justifyContent:'center'}}>
                            <GlobalButton text='Conoce Más' navegacion={navegacion}/>
                          </Grid>
                    </Grid>
         
        </form>

    );
}

