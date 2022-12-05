import { Modal, Grid, TextField, Typography } from '@mui/material';
import * as React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { GlobalButton } from '../../../components';
import AlertModal from '../../../components/AlertModal';
import { sendContact } from '../../../service/contact/sendContact';
import { isEmail } from '../../../utilities';

type FormData = {
	fullName: string;
	email: string;
	text: string;
};

export default function ContactForm() {

	const [isOpenModal, setIsOpenModal] = React.useState(false);
	
	const closeModal = () => {
		setIsOpenModal(false);
	};

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>();

	//Para probar si funcionan los formularios
	const formSubmitHandler = (data: FormData) => {
			console.log('form data is', data);
			sendContact(data.fullName, data.email, data.text)
			setIsOpenModal(true)

		
	};
	

	return (
		<form onSubmit={handleSubmit(formSubmitHandler)}>
			<Grid container spacing={5} p={6}>
				<Grid item xs={12}>
					<Typography
						variant='h4'
						textAlign='center'
						component='h4'
						color='third.main'
					>
						Contacto
					</Typography>
				</Grid>

				<Grid item xs={12}>
					<TextField
						{...register('fullName', {
							required: 'Este campo es requerido',
							pattern: { message: 'Nombre inválido', value: /^[A-Z ]+$/i },
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
							validate: isEmail,
						})}
						error={!!errors.email}
						helperText={errors.email?.message}
						type='email'
						placeholder='you@example.com'
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
					<GlobalButton
						text='Enviar'
						action={handleSubmit(formSubmitHandler)}
					/>
				</Grid>
			</Grid>

			{isOpenModal && (
				<AlertModal
					title='Mensaje enviado'
					text='Muchas gracias por contactarnos, te contestaremos a la brevedad.'
					urlImg='https://res.cloudinary.com/dlxlitkl6/image/upload/v1669814885/ananda%20marga/home/alerts/FeaturedIconMail_i5fwva.png'
					close={closeModal}
				/>
			)}

		
		</form>
	);
}
