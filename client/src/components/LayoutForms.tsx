import { Grid, Paper } from '@mui/material';
import Typography from '@mui/material/Typography';
import { forms } from '../types/interfaces';
export default function Contact({
	children,
	tittle,
	text,
	imgUrl = '',
}: forms) {
	return (
		<Grid
			container
			spacing={0}
			sx={{
				margin: '50px  0',
				justifyContent: { xs: 'center', md: 'flex-start' },
				alignItems: { xs: 'center', md: 'flex-start' },
				gap: { sm: 5, md: 0 },
				textAlign: { sm: 'center', md: 'start' },
			}}
		>
			<Grid
				item
				xs={12}
				md={4}
				sx={{
					display: { xs: 'none', sm: 'block' },
				}}
			>
				<Grid
					container
					sx={{
						margin: { xs: '0', md: '0 0 0 30px' },
					}}
				>
					<Grid item xs={12}>
						<Typography
							variant='h1'
							color='third.main'
							sx={{ fontSize: { xs: 30, md: 60 } }}
						>
							{tittle}
						</Typography>
					</Grid>
					<Grid
						item
						xs={12}
						sx={{
							borderLeft: { xs: 'none', md: '2px solid' },
							borderColor: 'secondary.main',
							paddingLeft: '5px',
						}}
					>
						<Typography component='p' color='text.secondary'>
							{text}
						</Typography>
					</Grid>

					{imgUrl.length > 0 && (
						<Grid item xs={12} sx={{ display: { xs: 'none', lg: 'block' } }}>
							<img
								src={imgUrl}
								alt='form img'
								style={{
									width: '100%',
									position: 'relative',
									top: '5%',
									left: '15%',
									zIndex: '1',
								}}
							/>
						</Grid>
					)}
				</Grid>
			</Grid>
			<Grid
				item
				xs={12}
				md={8}
				sx={{
					display: 'flex',
					justifyContent: 'center',
				}}
			>
				<Paper
					sx={{
						width: { xs: '100%', sm: '600px' },
						minHeight: '700px',
						backgroundColor: 'primary.main',
						borderRadius: '4px',
						border: { xs: 'none', sm: '1px solid' },
						borderColor: 'third.main',
						boxShadow: { xs: 'none', sm: '0px 4px 6px rgba(0, 0, 0, 0.25)' },
						zIndex: 3,
					}}
				>
					{children}
				</Paper>
			</Grid>
		</Grid>
	);
}
