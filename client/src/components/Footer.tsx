import { Divider, Typography } from '@mui/material';
import { Stack } from '@mui/system';

export default function Footer() {
  const font = { xs: '12px', md: '22px' }
	return (
		<Stack
			component='footer'
			direction='column'
			spacing={5}
			divider={
				<Divider sx={{ width: { xs: 408, md: 888 }, borderColor: 'rgba(217, 217, 217, 1)' }} />
			}
			justifyContent='center'
			alignItems='center'
			sx={{ padding: '40px 0', backgroundColor: 'text.secondary' }}
		>
			<Stack direction='row' spacing={{ xs: 5, md: 10 }}>
				<Typography
					variant='h6'
					gutterBottom
					sx={{
						fontWeight: 600,
						fontSize: font,
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
						fontSize: font,
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
							fontSize: font,
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
							fontSize: font,
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
							fontSize: font,
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
							fontSize: font,
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
					fontSize: font,
					lineHeight: '26px',
					color: 'primary.main',
				}}
			>
				Copyright  2022. All Rights reserved By Nocountry
			</Typography>
		</Stack>
	);
}
