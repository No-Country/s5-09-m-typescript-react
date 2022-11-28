import { Grid, Paper } from '@mui/material';
import Typography from '@mui/material/Typography';
import { forms } from '../types/interfaces';
export default function Contact({ children, tittle, text }: forms) {
	return (
		<Grid
			container
			spacing={0}
			sx={{
				margin: '50px  0',
			}}
		>
			<Grid item lg={4}>
				<Grid
					container
					sx={{
						margin: '0 0 0 30px',
					}}
				>
					<Grid item xs={12}>
						<Typography variant='h1' color='text.secondary' fontSize={64}>
							{tittle}
						</Typography>
					</Grid>
					<Grid
						item
						xs={12}
						sx={{
							borderLeft: '2px solid',
							borderColor: 'secondary.main',
							paddingLeft: '5px',
						}}
					>
						<Typography component='p' color='text.primary'>
							{text}
						</Typography>
					</Grid>
				</Grid>
			</Grid>
			<Grid
				item
				lg={8}
				sx={{
					display: 'flex',
					justifyContent: 'center',
				}}
			>
				<Paper
					sx={{
						width: '600px',
						minHeight: '700px',
						backgroundColor: '#FFFFFF',
						borderRadius: '4px',
						border: '1px solid #B2BCCA',
						boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.25)',
					}}
				>
					{children}
				</Paper>
			</Grid>
		</Grid>
	);
}
