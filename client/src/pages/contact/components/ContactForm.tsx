import { Grid, Button } from '@mui/material';
import { useForm, SubmitHandler } from 'react-hook-form';

type FormData = {
	fullName: string;
	email: string;
	text: string;
};

export default function ContactForm() {
	const inputSt = {
		display: 'block',
		width: '475px',
		height: '60px',
		marginBottom: '30px',
		fontWeight: '400',
		fontSize: '16px',
		lineHeight: '22px',
		padding: '20px',
		borderRadius: '5px',
		border: '1px solid #A9A8A8',
	};
	const laberSt = {
		marginLeft: '12px',
		fontWeight: '400',
		fontSize: '18px',
		lineHeight: '24px',
	};

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>();

	//Para probar si funcionan los formularios
	const formSubmitHandler: SubmitHandler<FormData> = (data: FormData) => {
		console.log('form data is', data);
	};

	return (
		<Grid>
			<form onSubmit={handleSubmit(formSubmitHandler)}>
				<label style={laberSt}>Nombre Completo</label>
				<input
					style={inputSt}
					autoComplete='off'
					placeholder='Ingresa tu nombre completo'
					{...register('fullName')}
				/>

				<label style={laberSt}>Correo</label>
				<input
					style={inputSt}
					autoComplete='off'
					placeholder='Ingresa tu correo'
					{...register('email')}
				/>

				<label style={laberSt}>Comentario</label>
				<textarea
					placeholder='Escribe aquí tu comentario'
					{...register('text')}
					autoComplete='off'
					style={{
						width: '475px',
						height: '130px',
						resize: 'none',
						marginBottom: '30px',
						fontWeight: '400',
						fontSize: '16px',
						lineHeight: '22px',
						padding: '20px',
						borderRadius: '5px',
						border: '1px solid #A9A8A8',
					}}
				/>

				<Button variant='contained' type='submit' color='primary'>
					enviar
				</Button>
			</form>
		</Grid>
	);
}
