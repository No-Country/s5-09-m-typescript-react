import { Modal, Grid, TextField, Typography } from '@mui/material';
import { display } from '@mui/system';
import * as React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { GlobalButton } from '../../../components';
import AlertModal from '../../../components/AlertModal';
import { isEmail } from '../../../utilities';

type FormData = {
	fullName: string;
	email: string;
	text: string;
};

export default function ContactForm() {

	const [isOpenModal, setIsOpenModal] = React.useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>();

	//Para probar si funcionan los formularios
	const formSubmitHandler: SubmitHandler<FormData> = (data: FormData) => {
		console.log('form data is', data);
		
		setIsOpenModal(!isOpenModal);
	};

	return (
		<form onSubmit={handleSubmit(formSubmitHandler)}>
			<Grid container spacing={5} p={6}>
				<Grid item xs={12}>
					<Typography variant='h4' textAlign='center' component='h4' color='text.secondary'>
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
							pattern: { message: "Ingrese un correo valido", value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/} 
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
						placeholder='Escribe aqui tu comentario'
						label='Comentario'
						color='text'
						fullWidth
						multiline
						rows={7}
					/>
				</Grid>

				<Grid
					item
					xs={12}
					style={{ display: 'flex', justifyContent: 'center' }}
				>
					<GlobalButton text='Enviar' action={handleSubmit(formSubmitHandler)} />
				
				</Grid>
			</Grid>
						
			{isOpenModal && <AlertModal title='Revisa tu correo' 
										text='Tu mensaje ha sido enviado, contestaremos a la brevedad, muchas gracias.'
										urlImg='https://res.cloudinary.com/dlxlitkl6/image/upload/v1669209748/ananda%20marga/home/alerts/FeaturedIconMail_fgcdsc.png'/>
										
			}
		</form>
		
	);
}
