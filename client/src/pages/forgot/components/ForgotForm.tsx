import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { TextField, Typography, Grid, Button } from '@mui/material';
import { useParams } from 'react-router-dom';
import * as Yup from 'yup';
import { resetPassword } from '../../../service';
import { useDispatch } from 'react-redux';

type FormData = {
	password: string;
	confirmPwd: string;
};

export default function ForgotForm() {
	const { token = '' } = useParams();

	const dispatch = useDispatch();

	const formSchema = Yup.object().shape({
		password: Yup.string()
			.required('Contraseña Requerida')
			.min(8, 'La contraseña debe tener mas de 8 caracteres'),
		// .matches(
		// 	/^(?=.*?[a-zA-Z])(?=.*?[0-9])(?=.*?[!@#\][:()"`;+\-'|_?,.</\\>=$%}{^&*~])$/,
		// 	'Debe tener carateres speciales, un número y una letra mayuscula',
		// ),
		confirmPwd: Yup.string()
			.required('Password is mendatory')
			.oneOf([Yup.ref('password')], 'Passwords does not match'),
	});

	const formOptions = { resolver: yupResolver(formSchema) };

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>(formOptions);

	const onSubmit = (data: FormData) => {
		const modifiedData = {
			token:
				'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOGU1YjgxNWU0ZGNhNTE5N2E0MjVkMiIsImFkbWluIjpmYWxzZSwiaWF0IjoxNjcwMzUwNTAyLCJleHAiOjE2NzAzNTE0MDJ9.otfjsdGt_fu-PBdWkmy5kgV9p9zDPfbJ2YxBOYgUOr4',
			password: data.password,
		};
		resetPassword(modifiedData, dispatch);
	};
	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Grid
				container
				spacing={0}
				sx={{
					padding: { xs: '15px', sm: 6 },
					justifyContent: 'center',

					textAlign: 'center',

					minHeight: '500px',
				}}
			>
				<Grid item xs={12}>
					<Typography
						variant='h3'
						sx={{
							alignSelf: 'center',
							color: 'third.main',
							fontWeight: 700,
							fontSize: '32px',
							lineHeight: '38px',
						}}
					>
						Actualizar Contraseña
					</Typography>
				</Grid>
				<Grid item xs={12}>
					<TextField
						fullWidth
						{...register('password')}
						error={!!errors.confirmPwd?.message}
						helperText={errors.password?.message}
						label='Nueva Contraseña'
						variant='outlined'
						color='text'
					/>
				</Grid>
				<Grid item xs={12}>
					<TextField
						fullWidth
						{...register('confirmPwd')}
						error={!!errors.confirmPwd?.message}
						helperText={errors.confirmPwd?.message}
						label='Repetir Contraseña'
						variant='outlined'
						color='text'
					/>
				</Grid>
				<Grid item xs={12}>
					<Button
						type='submit'
						color='secondary'
						variant='contained'
						className='circular-btn'
						size='large'
						fullWidth
					>
						Enviar Contraseña
					</Button>
				</Grid>
			</Grid>
		</form>
	);
}
