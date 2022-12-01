import { Divider, Typography } from '@mui/material';
import { Stack } from '@mui/system';

export default function Footer() {
	return (
		<Stack
			component='footer'
			direction='column'
			spacing={5}
			divider={
				<Divider sx={{ width: 888, borderColor: 'rgba(217, 217, 217, 1)' }} />
			}
			justifyContent='center'
			alignItems='center'
			sx={{ padding: '40px 0', backgroundColor: 'text.secondary' }}
		>
			<Stack direction='row' spacing={10}>
				<Typography
					variant='h6'
					gutterBottom
					sx={{
						fontWeight: 600,
						fontSize: '22px',
						lineHeight: '30px',
						color: 'primary.main',
					}}
				>
					Contacto
				</Typography>
				<Typography
					variant='h6'
					gutterBottom
					sx={{
						fontWeight: 600,
						fontSize: '22px',
						lineHeight: '30px',
						color: 'primary.main',
					}}
				>
					Mis prácticas
				</Typography>
				<Stack spacing={1}>
					<Typography
						variant='h6'
						gutterBottom
						sx={{
							fontWeight: 600,
							fontSize: '22px',
							lineHeight: '30px',
							color: 'primary.main',
						}}
					>
						Terminos Legales
					</Typography>
					<Typography
						variant='body1'
						sx={{
							fontWeight: 500,
							fontSize: '18px',
							lineHeight: '25px',
							color: 'primary.main',
						}}
					>
						Politica de privacidad
					</Typography>
					<Typography
						variant='body1'
						sx={{
							fontWeight: 500,
							fontSize: '18px',
							lineHeight: '25px',
							color: 'primary.main',
						}}
					>
						Politica de cookis
					</Typography>
					<Typography
						variant='body1'
						sx={{
							fontWeight: 500,
							fontSize: '18px',
							lineHeight: '25px',
							color: 'primary.main',
						}}
					>
						Aviso legal
					</Typography>
				</Stack>
			</Stack>
			<Typography
				sx={{
					fontWeight: 500,
					fontSize: '17px',
					lineHeight: '26px',
					color: 'primary.main',
				}}
			>
				Copyright (insertar icono) 2022 . All Rights reserved By Nocountry (no
				country? i dont think so)
			</Typography>
		</Stack>
	);
}
