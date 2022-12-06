import { Grid, Link, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { GlobalButton } from '../../../components';
import { useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { verifyCode } from '../../../service';
import { resendCode } from '../../../service/login/resendCode';
import { closeSession } from '../../../redux/slices/user';

type Inputs = {
	verificationCode: number;
};

export default function EmailVerification() {
	const { register, handleSubmit } = useForm<Inputs>();
	const user = useAppSelector(state => state.user);
	const dispatch = useAppDispatch();
	const resendCodeVerificado = () => {
		resendCode(dispatch, user.email!);
		dispatch(closeSession());
	};

	const onSubmit = (value: Inputs) => {
		if (user.code === value.verificationCode) {
			verifyCode(user.id!);
			dispatch(closeSession());
		}
	};
	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				width: '100vw',
				height: '100vh',
				background: 'rgba(0,0,0,0.3)',
				position: 'fixed',
				top: '0',
				left: '0',
				zIndex: '100',
			}}
		>
			<Grid
				component='form'
				onSubmit={handleSubmit(onSubmit)}
				container
				sx={{
					width: '400px',
					height: '400px',
					backgroundColor: 'primary.main',
					borderRadius: '10px',
				}}
			>
				<Grid
					item
					xs={12}
					sx={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<MailOutlineIcon fontSize='large' />
				</Grid>
				<Grid
					item
					xs={12}
					sx={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<Typography variant='body1'>
						Introduce el codigo de validación
					</Typography>
					<Typography variant='body1'>
						Confirma tu cuenta. {user.email}
					</Typography>
				</Grid>
				<Grid
					item
					xs={12}
					sx={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						gap: '10px',
					}}
				>
					<TextField
						{...register('verificationCode', {
							valueAsNumber: true,
						})}
						type='number'
						variant='outlined'
						color='secondary'
						focused
						sx={{
							width: '250px',
							height: '80px',
							textAlign: 'center',
						}}
					/>
				</Grid>
				<Grid
					item
					xs={12}
					sx={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<Typography variant='body1'>
						¿No recibiste un código? Haga clic para{' '}
						<Link
							variant='body1'
							color='secondary.main'
							onClick={() => console.log('hola') /* resendCodeVerificado() */}
						>
							reenviar.
						</Link>
					</Typography>
				</Grid>
				<Grid
					item
					xs={12}
					sx={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<GlobalButton type='submit' text='enviar' />
				</Grid>
			</Grid>
		</Box>
	);
}
